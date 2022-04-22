// ---- Imports ----
import dom from './dom-elements';
import Hotel from './classes/hotel';
import './css/styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';
import './images/trees-background.jpg';

let dayjs = require('dayjs')

// ---- API calls ----
apiCalls.then(call => {
	 let customers = call[0].customers;
	 let rooms = call[1].rooms;
	 let bookings = call[2].bookings;
	 let addBooking = call[3];
	 let getBookings = call[6];
	 loadData(customers, rooms, bookings, addBooking, getBookings);
	})
	
	// ---- Dom Elements ----
	let loadData = (customers, rooms, bookings, addBooking, getBookings) => {
		let hotel = new Hotel(customers, rooms, bookings)
		hotel.loginUser('customer1', 'overlook2021')
		let customer = hotel.currentUser
		domUpdates.renderPage(customer, hotel, addBooking)
		createEventListeners(hotel, addBooking, getBookings)
}

let createEventListeners = (hotel, addBooking, getBookings) => {
	dom.availableRooms.addEventListener('click', (e) => {
		handleAddBooking(e, hotel, addBooking, getBookings)
	})

	dom.form.addEventListener('input', (e) => {
		handleBookingForm(e, hotel)
	})

	dom.login.addEventListener('click', (e) => {
		console.log(e.value)
	})


}



// ---- Date ----



// ---- Event Handlers ----

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


