import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room'
import Booking from '../src/classes/booking'
import Customer from '../src/classes/customer'
import {customers, bookings, rooms} from '../src/sampleData/sample-data'

describe('Customer', () => {
	let customer, booking, room;

	beforeEach(() => {
		customer = new Customer(customers[0])
		booking = new Booking(bookings[0])
		room = new Room(rooms[0])
	})

	it('Should be a function', () => {
		expect(Customer).to.be.a('function');
	})

	it('should store data from customer data', () => {
		expect(customer.id).to.equal(customers[0].id);
		expect(customer.name).to.equal(customers[0].name);
	})

	it('should be able to store bookings unique to the customer', () => {
		customer.getBookings(bookings, rooms)
		expect(customer.bookings[0].id).to.equal(booking.id);
	})


})