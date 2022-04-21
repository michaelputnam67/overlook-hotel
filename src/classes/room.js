class Room {
	constructor(room) {
		this.roomNumber = room.number;
		this.roomType = room.roomType;
		this.hasBidet = room.bidet;
		this.bedSize = room.bedSize;
		this.numberOfBeds = room.numBeds;
		this.costPerNight = room.costPerNight;
	}

}


export default Room;