// ---- Imports ----
import dom from './dom-elements';
import Hotel from './classes/hotel';
import './css/styles.scss';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';
import './images/trees-background.jpg';

// ---- API calls ----
let getUser = (id) => {
	return apiCalls.then(call => {
			let getUserData = call[4]
		return getUserData(id)
	})
}	

apiCalls.then(call => {
		let customers = call[0].customers;
		let rooms = call[1].rooms;
		let bookings = call[2].bookings;
		let addBooking = call[3];
		let getBookings = call[6];
		loadData(customers, rooms, bookings, addBooking, getBookings);
	})

let loadData = (customers, rooms, bookings, addBooking, getBookings) => {
	let hotel = new Hotel(customers, rooms, bookings)
	createEventListeners(hotel, addBooking, getBookings)
}
	
// ---- Dom Elements ----

let createEventListeners = (hotel, addBooking, getBookings) => {
	dom.availableRooms.addEventListener('click', (e) => {
		handleAddBooking(e, hotel, addBooking, getBookings)
	});

	dom.form.addEventListener('input', (e) => {
		handleBookingForm(e, hotel)
	});

	dom.loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		submitUserInformation(hotel, addBooking, e);	
	});
}

// ---- Event Handlers ----

let getLoginInfo = (e) => {
	return Array.from(e.target, (input) => ({
		[input.name]: input.value
	})).filter((input) => {
		return Object.values(input).join('')		
	}).reduce((acc, input) => {
		acc[Object.keys(input).join('')] = Object.values(input).join('')
		return acc
	}, {})
}

let submitUserInformation = (hotel, addBooking, e) => {
	let loginInfo = getLoginInfo(e);
	let user = hotel.checkLoginInfo(loginInfo['user-name'], loginInfo.password)
	if(user !== 'Invalid login credentials, Please check your username and password.') {
		getUser(user.id).then((user) => {
			hotel.loginUser(user)
		}).then(() => {
				domUpdates.renderPage(hotel.currentUser, hotel, addBooking)
		}).catch((error) => console.log(error))
	} else {
		domUpdates.renderUserError(user)
	}
}

let handleAddBooking = (e, hotel, addBooking, getBookings) => {
	e.target.disabled = true;
	if(e.target.dataset.bookingid === 'addBooking') {
		let data = {
			"userID": hotel.currentUser.id,
			"date": `${dom.calendar.value.split('-').join('/')}`,
			"roomNumber": parseInt(e.target.id),
		} 
		addBooking(data).then(res => domUpdates.renderConfirmation(res, e)).then(() => {
			let output = getBookings()
			return output
		}).then((data) => {
			let output = updateBookingData(data, hotel)
			setTimeout(() => {
				domUpdates.renderDashboard(hotel.currentUser, output)
			}, 1000)
		})
	}
}

let updateBookingData = (data, hotel) => {
	let output = hotel.saveBookings(data.bookings);
	hotel.bookings = output
	hotel.currentUser.getCurrentBookings(hotel.bookings, hotel.rooms);
	let rooms = hotel.checkAvailability(dom.calendar.value);
	rooms = hotel.filterRoomsByType(dom.selectRoomType.value)
	return rooms;
}


let handleBookingForm = (e, hotel) => {
	let output;
	if(e.target.name === "select-date") {
		output = hotel.checkAvailability(e.target.value)
		output = hotel.filterRoomsByType(dom.selectRoomType.value)
		domUpdates.renderAvailableRooms(output)
	} else if(e.target.name === 'type') {
		output = hotel.filterRoomsByType(e.target.value)
		domUpdates.renderAvailableRooms(output)
	}
}


