import {
	createTransactionBox
} from "/modules/ui";
import Card3d from "card3d";
import {
	getRandomColor,
} from "/modules/helpers.js";
import {
	getData
} from "/modules/http.js";

const transactions_box = document.querySelector("table")
const card_box = document.querySelector(".card-box")
const item = document.querySelector(".item")
const cart_place = document.getElementById("multiChart");


let arr = {
	id: Math.random(),
	name: "Visa",
	currency: "EUR"
}
let fakeT = [{
	id: 465216,
	type: "Visa",
	date: '2023-01-15',
	categories: 'Покупка продуктов',
	sum: 1200
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-14',
	categories: 'Зачисление зарплаты',
	sum: 3000
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-15',
	categories: 'Оплата счета за интернет',
	sum: 8200
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-16',
	categories: 'Оплата счета за интернет',
	sum: 8010
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-17',
	categories: 'Оплата счета за интернет',
	sum: 3800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-18',
	categories: 'Оплата счета за интернет',
	sum: 5800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-19',
	categories: 'Оплата счета за интернет',
	sum: 7800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-20',
	categories: 'Оплата счета за интернет',
	sum: 6800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-21',
	categories: 'Оплата счета за интернет',
	sum: 3800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-22',
	categories: 'Оплата счета за интернет',
	sum: 9800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-23',
	categories: 'Оплата счета за интернет',
	sum: 2800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-24',
	categories: 'Оплата счета за интернет',
	sum: 6800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-25',
	categories: 'Оплата счета за интернет',
	sum: 2800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-28',
	categories: 'Оплата счета за интернет',
	sum: 5800
},
{
	id: 465216,
	type: "Visa",
	date: '2023-07-29',
	categories: 'Оплата счета за интернет',
	sum: 6800
},
]



item.style.background = `linear-gradient(66deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`

createTransactionBox(fakeT, transactions_box)



let monthNames = []
let spendings = []
fakeT.forEach(el => {
	monthNames.push(el.date)
	spendings.push(el.sum)
})
createMultiChart(monthNames, spendings, cart_place);

function createMultiChart(labels, data, place) {
	const ctx = place.getContext('2d');
	const multiChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
				{
					label: "Spendings",
					backgroundColor: "blue",
					borderColor: "blue",
					borderWidth: 1.5,
					data: data,
				}
			],
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

const urlParams = new URLSearchParams(window.location.search);
const card_id = urlParams.get('id');

getData(`/cards?id=${card_id}`)
	.then(res => {
		const user = res.data[0];
		console.log(user);
		document.querySelector(".item-date").textContent = user.date;
		document.querySelector(".item-name").textContent = user.name;
		document.querySelector(".item-balance").textContent = user.balance;
		document.querySelector(".item-currency").textContent = user.currency;
	});

urlParams.set('card_id', card_id);
const queryParams = urlParams.toString();

getData(`/transactions?${queryParams}`)
	.then(res => {
		createTransactionBox(res.data, transactions_box);
		const monthNames = [];
		const spendings = [];
		res.data.forEach(el => {
			monthNames.push(el.date);
			spendings.push(el.sum);
		});
	});