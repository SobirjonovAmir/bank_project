let cards = [
	{
		name: "Visa",
		currency: "RUB"
	},
	{
		name: "Visa",
		currency: "EUR"
	},
	//{
	//	name: "Visa",
	//	currency: "USD"
	//},
	//{
	//	name: "Visa",
	//	currency: "USD"
	//},
	//{
	//	name: "Visa",
	//	currency: "USD"
	//},
	//{
	//	name: "Visa",
	//	currency: "USD"
	//},
	//{
	//	name: "Visa",
	//	currency: "USD"
	//}
]
const cards_box = document.querySelector(".cards-box")

if (window.location.pathname === "/pages/cards.html") {
	createCardsBox(cards, cards_box)
} else if (window.location.pathname === "/pages/home.html") {
	createCardsBox(cards, cards_box, 4)
}

function createCardsBox(arr, place, limit) {
	const title = document.createElement("h2")
	const items_box = document.createElement("div")
	const all_cards = document.createElement("a")
	const add_btn = document.createElement("button")

	add_btn.classList.add("add-card-btn")
	all_cards.classList.add("link")
	items_box.classList.add("items-box")

	add_btn.textContent = "Добавить"
	title.textContent = "Мои кошельки"
	all_cards.textContent = "Смотреть все кошельки"
	all_cards.href = "./cards.html"


	if (window.location.pathname === "/pages/cards.html") {
		place.append(items_box, add_btn)
	} else if (window.location.pathname === "/pages/home.html") {
		place.append(title, items_box, all_cards)
	}

	add_btn.onclick = () => window.location.href = "./create-card.html"

	reloadCards(arr.slice(0, limit), items_box)
}


function reloadCards(arr, place) {
	place.innerHTML = ""
	for (const item of arr) {
		const card = document.createElement("div")
		const card_front = document.createElement("div")
		const card_back = document.createElement("div")
		const card_name = document.createElement("span")
		const currency = document.createElement("span")
		const balance = document.createElement("span")


		card.classList.add("card")
		card_front.classList.add("front")
		card_back.classList.add("back")

		card.style.background = `linear-gradient(66deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`
		card_name.textContent = item.name
		currency.textContent = item.currency
		balance.textContent = "14000"

		card.onclick = () => {
			handleClick(card)
		}

		card.append(card_front, card_back)
		card_front.append(card_name, currency)
		card_back.append(balance)
		place.append(card)
	}
	
	if (window.location.pathname === "/pages/home.html") {
		const add_card = document.createElement("div")
		const img = document.createElement("img")
		const add_card_title = document.createElement("p")

		add_card.classList.add("card", "add-new-card")
		img.classList.add("add-card__img")

		add_card_title.textContent = "Добавить карту"
		img.src = "../icons/add-icon.svg"
		add_card.onclick = () => window.location.href = "./create-card.html"

		add_card.append(add_card_title, img)
		place.append(add_card)
	}
}


function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function handleClick(arg) {
	if (arg.classList.contains("active")) {
		arg.classList.remove("active")
		arg.classList.add("close")
	} else {
		arg.classList.remove("close")
		arg.classList.add("active")
	}
}