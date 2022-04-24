
let dom = {
	selectRoomType: document.getElementById('selectType'),
	nav: document.getElementById('nav'),
	main: document.getElementById('main'),
	loginError: document.getElementById('loginError'),
	loginTest: document.querySelectorAll('#loginForm input'),
	login: document.getElementById('login'),
	loginForm: document.getElementById('loginForm'),
	response: document.getElementById('response'),
	totalCost: document.getElementById('totalCost'),
	currentBookingsHeader: document.getElementById('currentBookingsHeader'),
	type: document.getElementById('selectType'),
	roomType: document.getElementById('roomType'),
	availableRooms: document.getElementById('availableRooms'),
	form: document.getElementById('form'),
	calendar: document.getElementById('select'),
	dashboard: document.getElementById('dashboard'),
	bookingsContainer: document.getElementById('bookingsContainer'),
	headerTitle: document.getElementById('navTitle'),
	totalExpenditures: document.getElementById('totalExpenditures')
}

export default dom;