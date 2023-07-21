import {
    createTransactionBox
} from "./ui.js"


let fake = [{
    name: "Visa",
    currency: "RUB"
},
{
    name: "Visa",
    currency: "EUR"
}
]
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

let tran_box = document.querySelector('table')
createTransactionBox(fakeT, tran_box)