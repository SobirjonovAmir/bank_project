import {
	reloadCards,
} from "/modules/ui";
import {
	getData
} from "/modules/http"
import { addCard } from "../../modules/helpers";

let cardBox = document.querySelector('.items-box')
let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

getData("/cards?user_id=" + userData.id)
	.then(res => {
		reloadCards(res.data, cardBox)
		addCard(cardBox)
	})