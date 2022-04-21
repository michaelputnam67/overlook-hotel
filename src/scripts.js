// ---- Imports ----
import dom from './dom-elements'
import Hotel from './classes/hotel'
import './css/styles.css';
import apiCalls from './apiCalls'
import domUpdates from './domUpdates'
let dayjs = require('dayjs')

apiCalls.then(call => {
	 let customers = call[0].customers;
	 let rooms = call[1].rooms;
	 let bookings = call[2].bookings;
	 let addBooking = call[3]
	 loadData(customers, rooms, bookings, addBooking)
	})
	
	// ---- Dom Elements ----
	let loadData = (customers, rooms, bookings, addBooking) => {
		let hotel = new Hotel(customers, rooms, bookings)
		let customer = hotel.determineCurrentCustomer()
		domUpdates.renderPage(customer, hotel, addBooking)
		createEventListeners(hotel, addBooking)
}

let createEventListeners = (hotel, addBooking) => {
	dom.availableRooms.addEventListener('click', (e) => {
		handleAddBooking(e, hotel, addBooking)
	})

	dom.form.addEventListener('input', (e) => {
		handleBookingForm(e, hotel)
	})
}


// ---- API calls ----

// ---- Date ----

// ---- Event Handlers ----

let handleAddBooking = (e, hotel, addBooking) => {
	if(e.target.dataset.bookingid === 'addBooking') {
		let data = {
			"userID": hotel.currentCustomer.id,
			"date": `${dom.calendar.value.split('-').join('/')}`,
			"roomNumber": parseInt(e.target.id),
		} 
		addBooking(data).then(res => console.log(res)).then(() => {
			console.log('test')
		})
		// chain .thens to rerender and populate customer data
	}
}

let handleBookingForm = (e, hotel) => {
	let output;
	if(e.target.name === "select-date") {
		hotel.checkAvailability(e.target.value)
		output = hotel.availableRooms
		domUpdates.renderAvailableRooms(output)
		dom.roomType.classList.remove('hidden')
	} else if(e.target.name === 'type') {
		output = hotel.filterRoomsByType(e.target.value)
		domUpdates.renderAvailableRooms(output)
	}
}


