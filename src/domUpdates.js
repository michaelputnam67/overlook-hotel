import dom from './dom-elements'
let daysjs = require('dayjs')
import './images/trees-background.jpg'

const domUpdates = {
	renderPage (customer) {
		this.toggleHiddenElements();
		this.renderNav(customer)
		this.renderCurrentBookings(customer)
		this.renderSideBar(customer)
		this.renderTotalExpenditures(customer)
	},

	toggleHiddenElements() {
		dom.main.classList.remove('hidden')
		dom.login.classList.add('hidden')
		dom.dashboard.classList.remove('hidden')
		dom.nav.classList.remove('hidden')
	},

	renderUserError(message) {
		dom.loginError.innerText = `${message}`
	},

	renderNav(customer) {
		dom.headerTitle.innerText = `Welcome, ${customer.name}!`
	},

	renderDashboard(customer, rooms) {
		this.renderAvailableRooms(rooms)
		this.renderCurrentBookings(customer)
		this.renderTotalExpenditures(customer)
	},

	renderTotalExpenditures(customer) {
		dom.totalCost.innerText = `Total Expenditures: $${Math.round(customer.calculateTotalExpenditures())}`
	},

	renderCurrentBookings(customer) {
		dom.bookingsContainer.innerHTML = ''
		customer.bookings.forEach(booking => {
			dom.bookingsContainer.innerHTML += `
				<div class="booking">
				<h3>   Date: ${booking.date}   </h3>
					<ul>
						<li>Room Number: ${booking.roomNumber}</li>
						<li>${booking.roomInfo.roomType.toUpperCase()}</li>
						<li>Bed Size: ${booking.roomInfo.bedSize.toUpperCase()}</li>
						<li>Cost Per Night: ${booking.roomInfo.costPerNight}</li>
					</ul>
				</div>`
		})
	},
	renderConfirmation(response, e) {
		dom.response.innerText = response.message.replace('posted', 'booked')
		e.target.style.background = 'rgb(101,184,88)'
		e.target.style.color = 'black'
	},

	renderSideBar() {
		dom.calendar.value = `${daysjs(Date.now()).format('YYYY-MM-DD')}`
		dom.calendar.min = `${daysjs(Date.now()).format('YYYY-MM-DD')}`
	},

	renderFuriousApology() {
		dom.response.innerText = "We are so sorry, but there are no rooms available meeting that criteria!"
	},

	renderForm(rooms) {
		dom.roomType.classList.remove('hidden')
		dom.response.innerText = `There are ${rooms.length} available rooms, which match this criteria.`
	},

	renderAvailableRooms(rooms) {
		if(!rooms.length) {
			this.renderFuriousApology()
		} else {
			dom.response.innerText = ''
			this.renderForm(rooms)
		}
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