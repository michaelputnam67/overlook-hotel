import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room'
import {rooms, customers, bookings} from '../src/sampleData/sample-data'

describe('Room', () => {
	let room;
	beforeEach(() => {
		room = new Room(rooms[0])
	})

	it('Should be a function', () => {
		expect(Room).to.be.a('function');
	})

	it('should store data from Room data', () => {
		expect(room.roomNumber).to.equal(rooms[0].number);
		expect(room.roomType).to.equal(rooms[0].roomType);
		expect(room.hasBidet).to.equal(rooms[0].bidet);
		expect(room.bedSize).to.equal(rooms[0].bedSize);
		expect(room.numberOfBeds).to.equal(rooms[0].numBeds);
		expect(room.costPerNight).to.equal(rooms[0].costPerNight);
	})


})