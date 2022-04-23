// ---- Imports ----
import dom from './dom-elements';
import Hotel from './classes/hotel';
import './css/styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';
import './images/trees-background.jpg';

let dayjs = require('dayjs')

// ---- API calls ----
// let getApiCalls = () => {
let getUser = (id) => {
	return apiCalls.then(call => {
			let getUser = call[4]
		return getUser(id)
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
		// hotel.loginUser('customer1', 'overlook2021')
		// let customer = hotel.currentUser

		createEventListeners(hotel, addBooking, getBookings)
		}
// }
	
	// ---- Dom Elements ----

let createEventListeners = (hotel, addBooking, getBookings) => {
	dom.availableRooms.addEventListener('click', (e) => {
		handleAddBooking(e, hotel, addBooking, getBookings)
	})

	dom.form.addEventListener('input', (e) => {
		handleBookingForm(e, hotel)
	})

	dom.login.addEventListener('submit', (e) => {
		console.log(Array.from(e.target, (input) => ({
			[input.name]: input.value
		})).filter(input) )
		e.preventDefault();
		submitUserInformation(hotel, addBooking);	
	})
}



// ---- Date ----



// ---- Event Handlers ----

let getLoginInfo = () => {
	return Array.from(dom.loginTest).reduce((acc, input) => ({ ...acc, [input.id]: input.value
	}), {});
}

let submitUserInformation = (hotel, addBooking) => {

	let loginInfo = getLoginInfo();
	let user = hotel.checkLoginInfo(loginInfo.userName, loginInfo.password)
	if(user !== 'Invalid login credentials, Please check your username and password.') {
		getUser(user.id).then((user) => {
			hotel.loginUser(user)
		}).then(() => {
				domUpdates.renderPage(hotel.currentUser, hotel, addBooking)
		}).catch((error) => console.log(error))
	} else {
		domUpdates.renderUserError(user)
	}
	// if(user !== 'Invalid login credentials, Please check your username and password.') {
	// }
}




let handleAddBooking = (e, hotel, addBooking, getBookings) => {
	if(e.target.dataset.bookingid === 'addBooking') {
		let data = {
			"userID": hotel.currentUser.id,
			"date": `${dom.calendar.value.split('-').join('/')}`,
			"roomNumber": parseInt(e.target.id),
		} 
		addBooking(data).then(res => console.log(res)).then(() => {
			let output = getBookings()
			return output
		}).then((data) => {
			// updateDataModel(data)
			let output = hotel.saveBookings(data.bookings);
			hotel.bookings = output
			hotel.currentUser.getCurrentBookings(hotel.bookings, hotel.rooms);
			let rooms = hotel.checkAvailability(dom.calendar.value);
			domUpdates.renderDashboard(hotel.currentUser, rooms)
		})
	}
}

let handleBookingForm = (e, hotel) => {
	let output;
	if(e.target.name === "select-date") {
		hotel.checkAvailability(e.target.value)
		output = hotel.availableRooms
		domUpdates.renderAvailableRooms(output)

	} else if(e.target.name === 'type') {
		output = hotel.filterRoomsByType(e.target.value)
		domUpdates.renderAvailableRooms(output)
	}
}


