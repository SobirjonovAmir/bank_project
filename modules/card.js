import {
	createTransactionBox
} from "/modules/ui";
import Card3d from "card3d";
import {
	getRandomColor,
} from "/modules/helpers.js"

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

//const chartData = {
//	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//	datasets: [
//		{
//			label: "This week",
//			backgroundColor: "rgba(0, 0, 192, 1)",
//			borderColor: "rgba(0, 0, 192, 1)",
//			borderWidth: 2,
//			data: [100, 200, 1150, 300, 500, 650, 490],
//		},
//		{
//			label: "Last week",
//			backgroundColor: "rgba(255, 0, 0, 1)",
//			borderColor: "rgba(255, 0, 0, 1)",
//			borderWidth: 1,
//			data: [150, 370, 280, 100, 650, 120, 320],
//		}
//	],
//};
