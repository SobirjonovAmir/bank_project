import { v4 as uuidv4 } from 'uuid';
import { postData } from '../../modules/http';
import { createTransactionBox } from "../../modules/ui";

const userData = JSON.parse(localStorage.getItem("user"))
let table = document.querySelector('table')

let form = document.forms.create_transaction


form.onsubmit = (e) => {
    e.preventDefault()
    
    let userTran = {
        id: uuidv4(),
        user_id: userData.id,
        date: new Date().toLocaleDateString('en-CA'),
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        userTran[key] = value
    })

    postData("/transactions", userTran)
        .then(res => {
            createTransactionBox(res.data, table, 7)
        })

        form.reset()
        // location.assign('/pages/transactions/')
}