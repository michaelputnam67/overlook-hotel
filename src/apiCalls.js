// ---- Get Request ----

let getData = (dataset) => fetch(`http://localhost:3001/api/v1/${dataset}`).then(res => res.json()).catch(error => console.log(error));


let getBookings = () => fetch('http://localhost:3001/api/v1/bookings').then(res => res.json()).catch(error => console.log(error))


let getSpecificCustomer = (id) => fetch(`http://localhost:3001/api/v1/customers/${id}`).then(res => res.json()).catch(error => console.log(error))


// ---- Post Request ----

let addBooking = (bookingData) => fetch('http://localhost:3001/api/v1/bookings', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(bookingData)
}).then(res => {
	if(!res.ok) {
		throw new Error('Unable to process your post request')
	} else {
		return res.json()
	}
}).catch(error => console.log(error))

// ---- Delete Request ----

let deleteSingleBooking = (id) => fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
	method: 'DELETE',
	headers: { 'Content-Type': 'application/json'},
	body: JSON.stringify(id)
}).then(res => {
	if(!res.ok) {
		throw new Error('Unable to process your delete request')
	} else {
		return res.json()
	}
}).catch(error => console.log(error))

// ---- Promise All ----

let apiCalls = Promise.all([getData('customers'), getData('rooms'), getData('bookings'), addBooking, getSpecificCustomer, deleteSingleBooking, getBookings]);



export default apiCalls;

