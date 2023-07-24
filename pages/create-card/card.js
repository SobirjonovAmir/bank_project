import { v4 as uuidv4 } from 'uuid';
import { postData } from '/modules/http';
import { reloadCards } from "/modules/ui";
const userData = JSON.parse(localStorage.getItem("user"));
let cardBox = document.querySelector('.items-box');
let form = document.forms.create_cart;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userCard = {
        id: uuidv4(),
        user_id: userData.id,
        date: new Date().toLocaleDateString('en-CA')
    };
    userCard = Object.assign(userCard, Object.fromEntries(new FormData(form)));
    postData("/cards", userCard)
        .then(res => {
            reloadCards(res.data.cards, cardBox);
            console.log(res);
        });

    form.reset();
});