import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/booking'
import Room from '../src/classes/room'
import {bookings, rooms} from '../src/sampleData/sample-data'

describe('Booking', function() {
  let booking, room;

  beforeEach(() => {
    booking = new Booking(bookings[0])
    room = new Room(rooms[0])
  })

  it('Booking should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be able to instantiate a new class', () => {
    expect(booking).to.be.an.instanceOf(Booking)
  })

  it('should be able to take in and store booking data', () => {
    expect(booking.id).to.equal(bookings[0].id)
    expect(booking.userID).to.equal(bookings[0].userID)
    expect(booking.date).to.equal(bookings[0].date)
    expect(booking.roomNumber).to.equal(bookings[0].roomNumber)
  })

  it('should be able to store the room associated with that booking', () => {
    booking.getRoomInfo(rooms)
    expect(booking.roomInfo).to.be.a.instanceOf(Room)
    expect(booking.roomInfo.roomNumber).to.equal(room.roomNumber)
  })
	
});