import {
    getRandomColor,
    handleClick,
    populateTable,
    getCurrencySymbol
} from "./helpers"

export function reloadCards(arr, place, limit) {
    place.innerHTML = ""
    for (const item of arr.slice(0, limit)) {
        const card = document.createElement("div")
        const card_front = document.createElement("div")
        const card_back = document.createElement("div")
        const card_name = document.createElement("span")
        const currency = document.createElement("span")
        const balance = document.createElement("span")
        const img = document.createElement("img")
        const black_row = document.createElement("div")
        const back_img = document.createElement("img")

        card_name.classList.add("card-name")
        card.classList.add("card")
        card_front.classList.add("front")
        card_back.classList.add("back")
        black_row.classList.add("black-row")

        img.draggable = false
        back_img.draggable = false
        card.style.background = `linear-gradient(66deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`
        card_name.textContent = item.name
        currency.textContent = item.currency
        balance.textContent = `Balance:  ${parseFloat(item.balance).toLocaleString()} ${getCurrencySymbol(item.currency)}`
        img.src = "https://i.ibb.co/PYss3yv/map.png"
        back_img.src = "https://i.ibb.co/PYss3yv/map.png"

        card.onclick = () => {
            handleClick(card)
        }
        card.ondblclick = () => {
            window.location.href = `/pages/card/?id=${item.id}`
        }

        card.append(card_front, card_back)
        card_front.append(img, card_name, currency)
        card_back.append(black_row, back_img, balance)
        place.append(card)
    }
}

export function createTransactionBox(arr, place, limit) {
    if (arr.length === 0) {
        place.innerHTML = "У вас нету транзакций, <a class='link' href='/pages/create-transaction/'>хотите добавить ?</a>"
        return
    }
    let tr1 = document.createElement("tr")
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    let th5 = document.createElement("th")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")

    th1.innerHTML = `ID`
    th2.innerHTML = `Отправленно с кашелька`
    th3.innerHTML = `Категория`
    th4.innerHTML = `Сумма транзации`
    th5.innerHTML = `Когда`

    tr1.append(th1, th2, th3, th4, th5)
    thead.append(tr1)
    place.append(thead, tbody)
    populateTable(arr.slice(0, limit), tbody);
}



