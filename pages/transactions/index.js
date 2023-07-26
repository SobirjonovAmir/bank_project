import {
    createTransactionBox
} from "/modules/ui.js"
import { getData } from '../../modules/http'

let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

// let fakeT = [{
//     id: 465216,
//     type: "Visa",
//     date: '2023-01-15',
//     categories: 'Покупка продуктов',
//     sum: 1200
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-14',
//     categories: 'Зачисление зарплаты',
//     sum: 35000
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-12',
//     categories: 'Оплата счета за интернет',
//     sum: 800
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-12',
//     categories: 'Оплата счета за интернет',
//     sum: 800
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-12',
//     categories: 'Оплата счета за интернет',
//     sum: 800
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-12',
//     categories: 'Оплата счета за интернет',
//     sum: 800
// },
// {
//     id: 465216,
//     type: "Visa",
//     date: '2023-07-12',
//     categories: 'Оплата счета за интернет',
//     sum: 800
// },
// ]

let tran_box = document.querySelector('table')
// createTransactionBox(fakeT, tran_box)
getData('/transactions')
.then(res => {
    createTransactionBox(res.data, tran_box, )
})