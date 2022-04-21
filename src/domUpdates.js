import dom from './dom-elements'
let daysjs = require('dayjs')

const domUpdates = {
	renderPage (customer, hotel, addBooking) {
		this.renderNav(customer)
		this.renderDashboard(customer)
		this.renderSideBar(customer)
	},

	renderNav(customer) {
		dom.headerTitle.innerText = `Welcome, ${customer.name}!`
		dom.totalExpenditures.innerText = `Total Expenditures: $${Math.round(customer.calculateTotalExpenditures())}`
	},

	renderDashboard(customer) {
		customer.bookings.forEach(booking => {
			dom.bookingsContainer.innerHTML += `
				<div class="booking">
					<ul>
						<h3>Booking:</h3>
						<li>Date: ${booking.date}</li>
						<li>Room Number: ${booking.roomNumber}</li>
						<li>${booking.roomInfo.roomType.toUpperCase()}</li>
						<li>Bed Size: ${booking.roomInfo.bedSize.toUpperCase()}</li>
						<li>Cost Per Night: ${booking.roomInfo.costPerNight}</li>
					</ul>
				</div>`
		})
	},

	renderSideBar(customer) {
		dom.calendar.value = `${daysjs(Date.now()).format('YYYY-MM-DD')}`	
	},

	renderAvailableRooms(rooms) {
		dom.availableRooms.innerHTML = ''
		let hasBidet = (room) => {
			if(room.bidet) {
				return `<li>Bidet Included!</li>`
			} else {
				return `<li class="hidden">Bidet Included!</li>`
			}
		}
		rooms.forEach((room) => {
			dom.availableRooms.innerHTML += `
			<div class="booking">
				<ul>
					<li>Room Number: ${room.number}</li>
					<li>Room Type: ${room.roomType.toUpperCase()}</li>
					<li>Bed Size: ${room.bedSize.toUpperCase()}</li>
					${hasBidet(room)}
					<li>Cost Per Night: ${room.costPerNight}</li>
				</ul>
				<button data-bookingid="addBooking" id=${room.number}>BOOK</button>
			</div>`
		})
	},
}

export default domUpdates;