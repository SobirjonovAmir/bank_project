import { v4 as uuidv4 } from 'uuid';
import { getSymbols, postData } from '../../modules/http';

const form = document.forms.create_card
const currency = document.querySelector('#currency')
const select = document.querySelector('datalist')
const inputs = document.querySelectorAll('input')
let userData = JSON.parse(localStorage.getItem("user"))
let symbols = []

getSymbols()
	.then(res => {
		symbols = Object.keys(res)
		for (let key in res) {
			let opt = new Option(res[key], key)
			select.append(opt)
		}
	})

form.onsubmit = (e) => {
	e.preventDefault()

	let card = {
		"id": uuidv4(),
		"user_id": userData.id,
		"date": new Date().toLocaleDateString('en-CA'),
	}
	let fm = new FormData(form)
	fm.forEach((value, key) => {
		card[key] = value
	})

	inputs.forEach(input => {
		if (input.value === '') {
			input.style.border = "1px solid red"
		} else {
			input.style.border = "1px solid green"
		}
	})

	if (!symbols.includes(card.currency)) {
		currency.style.border = "1px solid red"
		return
	} else {
		currency.style.border = "1px solid green"
	}

	for (const key in card) {
		const element = card[key];
		if (element === "") {
			return
		}
	}

	postData("/cards", card)
		.then(res => {
			if (res.status === 200 || res.status === 201) {
				location.assign('/pages/wallets/')
			}
		})

	form.reset()
}




