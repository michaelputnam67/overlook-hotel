let dayjs = require('dayjs');
import Booking from './booking';

class Customer {
	constructor (customer) {
		this.id = customer.id;
		this.name = customer.name;
		this.bookings = [];
	}

	getBookings(bookings, rooms) {
		this.bookings = bookings.filter((booking) => booking.userID === this.id).map((booking) => {
			booking = new Booking(booking)
			booking.getRoomInfo(rooms)
			return booking
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
