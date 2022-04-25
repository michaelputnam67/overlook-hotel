let dayjs = require('dayjs');
import Booking from './booking';

class Customer {
	constructor (customer) {
		this.id = customer.id;
		this.name = customer.name;
		this.bookings = [];
	}

	sortBookingsByDate() {
		this.bookings.sort((bookingA, bookingB) => {
			let bookingADate = bookingA.date.split('/')
			let bookingBDate = bookingB.date.split('/')
			let checkDates = (a, b, i = 0) => {
				return (bookingADate[a] > bookingBDate[b]) ? 1 : (bookingADate[a] < bookingBDate[b]) ? -1 : (i === 2) ? 0 :	checkDates(i+1, i+1, i+1)
			}
			let output = checkDates(0, 0, 0)
		 return output
	 })
 }

	getCurrentBookings(bookings, rooms) {
		this.bookings = bookings.filter((booking) => booking.userID === this.id)
		this.bookings.forEach(booking => {
			booking.getRoomInfo(rooms)
		})
	}

	calculateTotalExpenditures() {
		return this.bookings.reduce((acc, booking) => {
			acc += booking.roomInfo.costPerNight
			return acc
		}, 0)
	}

}

export default Customer;
