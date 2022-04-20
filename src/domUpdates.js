import dom from './dom-elements'
let daysjs = require('dayjs')

const domUpdates = {
	renderPage (customer) {
		this.renderNav(customer)
		this.renderDashboard(customer)
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
}

export default domUpdates;