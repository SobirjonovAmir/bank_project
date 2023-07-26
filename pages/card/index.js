import Card3d from "card3d";
import {
	createTransactionBox
} from "/modules/ui";
import {
	getData
} from "/modules/http"
import {
	getRandomColor,
} from "/modules/helpers"

const item = document.querySelector(".item")
const transactions_box = document.querySelector("table")
const cart_place = document.getElementById("multiChart");
let userData = JSON.parse(localStorage.getItem("user"))
let card_id = location.search.split("=").at(-1)
let monthNames = []
let spendings = []

getData("/cards?id=" + card_id)
	.then(res => {
		[user] = res.data
		document.querySelector(".item-name").textContent = user.name
		document.querySelector(".item-currency").textContent = user.currency
		document.querySelector(".item-date").textContent = user.date
		document.querySelector(".item-balance").textContent = user.balance
	})


getData("/transactions?wallet_id=" + card_id)
	.then(res => {
		createTransactionBox(res.data, transactions_box)
		res.data.forEach(el => {
			monthNames.push(el.date)
			spendings.push(el.total)
		})
		createMultiChart(monthNames, spendings, cart_place);
	})






function createMultiChart(labels, data, place) {
	const ctx = place.getContext('2d');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				label: "Spendings",
				backgroundColor: "blue",
				borderColor: "blue",
				borderWidth: 1.5,
				data: data,
			}],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				}
			},
			elements: {
				line: {
					tension: 0.4,
				}
			}
		}
	});
}
item.style.background = `linear-gradient(66deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`
