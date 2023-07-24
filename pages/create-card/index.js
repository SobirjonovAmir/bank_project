
import { v4 as uuidv4 } from 'uuid';
import { postData } from '../../modules/http';
import { reloadCards } from "../../modules/ui";

const newData = JSON.parse(localStorage.getItem("user"))
let cardBox = document.querySelector('.items-box')
let form = document.forms.create_cart


form.onsubmit = (e) => {
    e.preventDefault()

    let userCard = {
        id: uuidv4(),
        user_id: newData.id,
        date: new Date().toLocaleDateString('en-CA'),
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        userCard[key] = value
    })

    postData("/cards", userCard)
        .then(res => {
            reloadCards(res.data.cards, cardBox)
            console.log(res);
        })
    form.reset()
}