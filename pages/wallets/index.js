
import { reloadCards } from "../../modules/ui";
import { getData } from "../../modules/http";

let cardBox = document.querySelector('.items-box')

getData('/cards')
    .then(res => {
        reloadCards(res.data, cardBox)
    })

