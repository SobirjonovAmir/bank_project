import {
    createTransactionBox
} from "/modules/ui.js"
import { getData } from '../../modules/http'

const table = document.querySelector('table')
const userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

getData('/transactions?user_id=' + userData?.id)
    .then(res => {
        createTransactionBox(res.data, table)
    })
