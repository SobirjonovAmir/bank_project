import { v4 as uuidv4 } from 'uuid';
import { getData, postData } from '/modules/http';

const form = document.forms.create_transaction
const select = document.querySelector('#card-select')
let userData = JSON.parse(localStorage.getItem("user"))


getData("/cards?user_id=" + userData.id)
	.then(res => {
		console.log(res.data);
		for (let card of res.data) {
			let opt = new Option(card.name, card.name)
			select.append(opt)
		}
	})


form.onsubmit = (e) => {
	e.preventDefault()

	let transaction = {
		"id": uuidv4(),
		"user_id": userData.id,
		"date": new Date().toLocaleDateString("en-CA")
	}
	let fm = new FormData(form)
	fm.forEach((value, key) => {
		transaction[key] = value
	})

	postData("/transactions", transaction)
		.then(res => {
			if (res.status === 200 || res.status === 201) {
				location.assign('/pages/transactions/')
			}
		})

	form.reset()
}