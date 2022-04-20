import Room from './room'

class Booking {
	constructor(bookingData) {
		this.id = bookingData.id;
		this.userID = bookingData.userID;
		this.date = bookingData.date;
		this.roomNumber = bookingData.roomNumber;
		this.roomInfo;
	}

	getRoomInfo(rooms) {
		let room = rooms.find((room) => room.number === this.roomNumber)
		this.roomInfo = new Room(room)
	}

};

export default Booking;