import Booking from './booking'
import Customer from './customer'

 class Hotel {
	constructor(customers, rooms, bookings) {
		this.bookings = this.saveBookings(bookings);
		this.rooms = rooms;
		this.customers = this.collectCustomerData(customers);
		this.currentUser;
		this.availableRooms;
	}

	checkAvailability(date) {
		this.availableRooms = this.rooms;
		let conflicts = this.bookings.filter((booking) => {
			return booking.date === date.split('-').join('/')
		})
		let checkRooms = (room) => {
			return conflicts.reduce((acc, conflict) => {
				if(conflict.roomNumber === room.number) {
					acc = false
				} 
				return acc
			}, true)
		}
		this.availableRooms = this.availableRooms.filter((room) => checkRooms(room))
		return this.availableRooms
	}

	// sortRoomsByDate() {

	// }

	saveBookings(bookings) {
		return bookings.map((booking) => {
			return new Booking(booking)
		})
	}

	collectCustomerData(customers) {
		return customers.map((customer) => {
			let newCustomer = new Customer(customer)
			newCustomer.getCurrentBookings(this.bookings, this.rooms)
			return newCustomer
		})
	}

	checkLoginInfo(username, password) {
		let getId = (input) => {
			return input.split('').filter((ele) => !isNaN(ele)).join('')
		}
		let checkUsername = (name) => {
			return this.customers.find((customer) => customer.id === parseInt(getId(name)))}

		if(password === 'overlook2021' && checkUsername(username)) {
			return checkUsername(username)
		} else {
			return 'Invalid login credentials, Please check your username and password.'
		}
	}

	loginUser(user) {
		this.currentUser = this.customers.find((customer) => {
			return customer.id === user.id
		})
	}

	filterRoomsByType(type) {
		let roomsByType = this.availableRooms
		if(type) {
			roomsByType = this.availableRooms.filter((room) => room.roomType === type)
		}
		return roomsByType
	}



};

export default Hotel;