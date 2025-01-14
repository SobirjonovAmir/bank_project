import { v4 as uuidv4 } from 'uuid';
import { postData, getData, patchData } from '/modules/http';

const form = document.forms.create_transaction
const select = document.querySelector('select')
const inputs = document.querySelectorAll('input')
const userData = JSON.parse(localStorage.getItem("user"))
let balanceCard = document.querySelector(".balance-card")
let balance = document.querySelector(".balance")
let cards = []


function ckeckTotal(input, isBool) {
	input.style.border = isBool ? '2px solid green' : '2px solid red'
}

function warning(elementP, message) {
	const warningElement = document.querySelector(elementP)
	warningElement.textContent = message
}


getData("/cards?user_id=" + userData.id)
	.then(res => {
		cards = res.data
		for (let card of cards) {
			let opt = new Option(card.name, JSON.stringify(card))
			select.append(opt)
		}
	})


select.onchange = () => {
	let selectedCard = JSON.parse(select.value)
	balance.classList.remove("show")
	if (selectedCard) {
		balance.classList.add("show")
		balanceCard.innerHTML = selectedCard.balance
	} else {
		balance.classList.remove("show")
		balanceCard.innerHTML = ""
	}
}

form.onsubmit = (e) => {
	e.preventDefault()

	let userTransaction = {
		id: uuidv4(),
		user_id: userData.id,
		date: new Date().toLocaleDateString('en-CA'),
	}

	let fm = new FormData(form)

	fm.forEach((value, key) => {
		userTransaction[key] = value
	})

	inputs.forEach(input => {
		if (input.value === '') {
			input.style.border = "1px solid red"
		} else {
			input.style.border = "1px solid green"
		}
	})
	if (select.value === '') {
		select.style.border = "1px solid red"
	} else {
		select.style.border = "1px solid green"
	}

	for (const key in userTransaction) {
		const element = userTransaction[key];
		if (element === "") {
			return
		}
	}


	let selectedCard = JSON.parse(form.wallet.value)
	let price = +form.total.value

	if (selectedCard && selectedCard.balance >= price) {
		userTransaction.wallet = selectedCard
		userTransaction.wallet_id = selectedCard.id
		userTransaction.total = price

		postData("/transactions", userTransaction)
			.then(res => {
				if (res.status === 200 || res.status === 201) {

					const newBalance = selectedCard.balance - price
					patchData(`/cards/${selectedCard.id}`, { balance: newBalance })
						.then(patchRes => {
							if (patchRes.status === 200) {
								location.assign('/pages/transactions/')
							}
						})
				}
			})

		form.reset()
	} else {
		alert('Недостаточно средств на выбранной карточке!')
	}
}


form.total.oninput = () => {
	let selectedCard = JSON.parse(form.wallet.value)
	let price = +form.total.value

	if (selectedCard) {

		if (selectedCard.balance >= price) {
			warning('#wallet-warning', '')
			ckeckTotal(form.wallet, true)
		} else {
			warning('#wallet-warning', 'Недостаточно средств на выбранной карточке!')
			ckeckTotal(form.wallet, false)
		}

		if (price > 0) {
			warning('#total-warning', '')
			ckeckTotal(form.total, true)
		} else {
			warning('#total-warning', 'Введите сумму больше нуля!')
			ckeckTotal(form.total, false)
		}
	} else {
		warning('#wallet-warning', 'Выберите карточку!')
		ckeckTotal(form.wallet, false)
		warning('#total-warning', '')
		ckeckTotal(form.total, true)
	}

}

