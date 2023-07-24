import {
    reloadCards,
    createTransactionBox
} from "./modules/ui";
import {
    getData
} from "/modules/http"

let cardBox = document.querySelector('.items-box')
let table = document.querySelector('table')
let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-name").textContent = userData.name
document.querySelector("#user-email").textContent = userData.email

getData("/cards")
    .then(res => reloadCards(res.data, cardBox, 4));


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
    sum: 35000
},
{
    id: 465216,
    type: "Visa",
    date: '2023-07-12',
    categories: 'Оплата счета за интернет',
    sum: 800
},
{
    id: 465216,
    type: "Visa",
    date: '2023-07-12',
    categories: 'Оплата счета за интернет',
    sum: 800
},
{
    id: 465216,
    type: "Visa",
    date: '2023-07-12',
    categories: 'Оплата счета за интернет',
    sum: 800
},
{
    id: 465216,
    type: "Visa",
    date: '2023-07-12',
    categories: 'Оплата счета за интернет',
    sum: 800
},
{
    id: 465216,
    type: "Visa",
    date: '2023-07-12',
    categories: 'Оплата счета за интернет',
    sum: 800
},
]



createTransactionBox(fakeT, table, 7)
