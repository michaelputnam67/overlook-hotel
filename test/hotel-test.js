import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room'
import Booking from '../src/classes/booking'
import Customer from '../src/classes/customer'
import Hotel from '../src/classes/hotel'
import {customers, bookings, rooms} from '../src/sampleData/sample-data'

describe.only('Hotel', () => {
	let customer, booking, room, hotel;

	beforeEach(() => {
		customer = new Customer(customers[0])
		booking = new Booking(bookings[0])
		room = new Room(rooms[0])
		hotel = new Hotel(customers, rooms, bookings)
	})

	it('Should be a function', () => {
		expect(Hotel).to.be.a('function');
	})

	it('should store data on all the rooms', () => {
		expect(hotel.rooms).to.deep.equal(rooms);
	})

	// it('should be able to store bookings unique to the customer', () => {
	// 	customer.getBookings(bookings, rooms)
	// 	expect(customer.bookings[0].id).to.equal(booking.id);
	// })


})