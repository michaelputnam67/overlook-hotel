// ---- Imports ----
import dom from './dom-elements'
import Customer from './classes/customer'
import './css/styles.css';
import apiCalls from './apiCalls'
import domUpdates from './domUpdates'
let dayjs = require('dayjs')

apiCalls.then(call => {
	 let customers = call[0].customers;
	 let rooms = call[1].rooms;
	 let bookings = call[2].bookings;
	 loadData(customers, rooms, bookings)
}
)
// ---- Dom Elements ----
let loadData = (customers, rooms, bookings) => {
	let randomIndex = Math.floor(Math.random() * customers.length)
	let customer = new Customer(customers[randomIndex])
	customer.getBookings(bookings, rooms)
	domUpdates.renderPage(customer)
}


// ---- API calls ----

// ---- Date ----

let currentDay = dayjs(Date.now()).format('MM/DD/YYYY')




