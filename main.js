import {
    reloadCards,
    createTransactionBox
} from "./modules/ui";
import {
    getData
} from "/modules/http"
import {
    addCard
} from "/modules/helpers"

let cardBox = document.querySelector('.items-box')
let table = document.querySelector('table')
let userData = JSON.parse(localStorage.getItem("user"))

document.querySelector("#user-name").textContent = `${userData.surname} ${userData.name}`
document.querySelector("#user-email").textContent = userData.email

getData("/cards?user_id=" + userData.id)
    .then(res => {
        reloadCards(res.data, cardBox, 4)
        if (res.data.length < 4) {
            addCard(cardBox)
        }
    })

getData('/transactions?user_id=' + userData?.id)
    .then(res => {
        createTransactionBox(res.data, table, 5)
    })
