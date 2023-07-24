import {
	reloadCards,
} from "/modules/ui";
import {
	getData
} from "/modules/http"

let cardBox = document.querySelector('.items-box')
let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

getData("/cards")
	.then(res => {
		reloadCards(res.data, cardBox)
	})

