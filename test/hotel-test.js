import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room'
import Booking from '../src/classes/booking'
import Customer from '../src/classes/customer'
import Hotel from '../src/classes/hotel'
import {customers, bookings, rooms} from '../src/sampleData/sample-data'

describe('Hotel', () => {
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

	it('should store data on all the customers', () => {
		expect(hotel.customers[2].name).to.equal(customers[2].name);
	})

	it('should store data on all the bookings', () => {
		expect(hotel.bookings[2].userID).to.equal(bookings[2].userID)
	})
	
	it('should let the user know their login information is incorrect', () => {
		let username = 'customer2';
		let password = 'ovelok2022';
		let output = hotel.checkLoginInfo(username, password)
		expect(output).to.equal('Invalid login credentials, Please check your username and password.')
	})

	it('should be able to determine the currentUser', () => {
		hotel.loginUser(customers[0])
		expect(hotel.currentUser.name).to.deep.equal(customer.name)
	})

	it('should be able to check the availability of rooms on a given date', () => {
		hotel.checkAvailability("2022-02-16")
		expect(hotel.availableRooms[1].number).to.equal(3)
	})

	it('should be able to return the available rooms', () => {
		let availableRooms = hotel.checkAvailability('2022-02-16')
		expect(availableRooms[1].number).to.equal(3)
	})

	it('should be able to filter rooms by type', () => {
		hotel.checkAvailability('2022-02-16')
		let output = hotel.filterRoomsByType("single room")
		expect(output.length).to.equal(1)
		expect(output[0].number).to.equal(rooms[2].number)
	})

})