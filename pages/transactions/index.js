import {
    createTransactionBox
} from "/modules/ui"
import {
    getData
} from "/modules/http"

const tran_box = document.querySelector('table')
const userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

getData("/transactions?user_id=" + userData.id)
    .then(res => createTransactionBox(res.data, tran_box))
