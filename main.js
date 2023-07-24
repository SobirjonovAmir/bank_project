import {
    reloadCards,
    createTransactionBox
} from "./modules/ui";
import { getData } from "./modules/http";

const userData = JSON.parse(localStorage.getItem("user")) 
let viewName = document.querySelector('#user-name')
let viewEmail = document.querySelector('#user-email')
let cardBox = document.querySelector('.items-box')
let table = document.querySelector('table')
// btn plus crete some
let tr = document.querySelector('.new_transaction') 
let newCardBtn = document.querySelector('.add_new_card')
let newTransBtn = document.querySelector('.add_new_transaction')


viewName.innerHTML = userData.surname + " " + userData.name
viewEmail.innerHTML = userData.email

newCardBtn.onclick = () => {
    location.assign("/pages/create-card/")
}
newTransBtn.onclick = () => {
    location.assign("/pages/create-transaction/")
}


getData('/cards')
    .then(res => {
        reloadCards(res.data.slice(0, 4), cardBox)
    })
    
getData('/transactions')
    .then(res => {
        // if(res.data.lenght !== 0) {
        //     // tr.style.display = "none"
        //     table.style.display = "table"
        // }
        createTransactionBox(res.data, table, 7)
    })
    
// createTransactionBox(fakeT, table, 7)

