import moment from "moment"
export function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function handleClick(arg) {
    if (arg.classList.contains("active")) {
        arg.classList.remove("active")
        arg.classList.add("close")
    } else if (!arg.classList.contains("active")) {
        arg.classList.remove("close")
        arg.classList.add("active")
    }
}

export function populateTable(arr, place) {
    place.innerHTML = ""
    for (let item of arr) {
        const row = place.insertRow(-1);
        const id = row.insertCell(0);
        const cart_type = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        const amountCell = row.insertCell(3);
        const dateCell = row.insertCell(4);
        let date = moment().diff(moment(item.date), "days")
        id.title = item.id
        id.innerHTML = item.id.slice(0, 8);
        cart_type.innerHTML = item.wallet.name;
        dateCell.innerHTML = formatDays(date)
        descriptionCell.innerHTML = item.category;
        amountCell.innerHTML = item.total.toFixed(2);


        row.append(id, cart_type, descriptionCell, amountCell, dateCell)
        place.append(row)
    }
}

function formatDays(numDays) {
    if (numDays === 0) {
        return "Сегодня";
    } else if (numDays === 1) {
        return "Завтра";
    } else if (numDays === -1) {
        return "Вчера";
    } else if (numDays > 1) {
        return `Через ${numDays} ${getDayText(numDays)}`;
    } else {
        return `${Math.abs(numDays)} ${getDayText(numDays)} назад`;
    }
}

function getDayText(numDays) {
    const lastDigit = Math.abs(numDays) % 10;
    if (lastDigit === 1 && Math.abs(numDays) !== 11) {
        return "день";
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(Math.abs(numDays))) {
        return "дня";
    } else {
        return "дней";
    }
}

export function addCard(place) {
    const add_card = document.createElement("div")
    const img = document.createElement("img")
    const add_card_title = document.createElement("p")

    add_card.classList.add("card", "add-new-card")
    img.classList.add("add-card__img")

    add_card_title.textContent = "Добавить карту"
    img.src = "/public/add-icon.svg"
    add_card.onclick = () => location.assign("/pages/create-card/")

    add_card.append(add_card_title, img)
    place.append(add_card)
}

export const currencies = {
    "AED": "د.إ",
    "AFN": "؋",
    "ALL": "L",
    "AMD": "֏",
    "ANG": "ƒ",
    "AOA": "Kz",
    "ARS": "$",
    "AUD": "A$",
    "AWG": "ƒ",
    "AZN": "₼",
    "BAM": "KM",
    "BBD": "Bds$",
    "BDT": "৳",
    "BGN": "лв",
    "BHD": "ب.د",
    "BIF": "FBu",
    "BMD": "$",
    "BND": "B$",
    "BOB": "Bs.",
    "BRL": "R$",
    "BSD": "$",
    "BTN": "Nu.",
    "BWP": "P",
    "BYN": "Br",
    "BZD": "BZ$",
    "CAD": "C$",
    "CDF": "FC",
    "CHF": "Fr",
    "CLP": "$",
    "CNY": "¥",
    "COP": "$",
    "CRC": "₡",
    "CUC": "CUC$",
    "CUP": "₱",
    "CVE": "$",
    "CZK": "Kč",
    "DJF": "Fdj",
    "DKK": "kr",
    "DOP": "RD$",
    "DZD": "دج",
    "EGP": "ج.م",
    "ERN": "Nfk",
    "ETB": "Br",
    "EUR": "€",
    "FJD": "$",
    "FKP": "£",
    "GBP": "£",
    "GEL": "₾",
    "GGP": "£",
    "GHS": "₵",
    "GIP": "£",
    "GMD": "D",
    "GNF": "FG",
    "GTQ": "Q",
    "GYD": "$",
    "HKD": "HK$",
    "HNL": "L",
    "HRK": "kn",
    "HTG": "G",
    "HUF": "Ft",
    "IDR": "Rp",
    "ILS": "₪",
    "IMP": "£",
    "INR": "₹",
    "IQD": "ع.د",
    "IRR": "﷼",
    "ISK": "kr",
    "JEP": "£",
    "JMD": "J$",
    "JOD": "د.ا",
    "JPY": "¥",
    "KES": "KSh",
    "KGS": "сом",
    "KHR": "៛",
    "KMF": "CF",
    "KPW": "₩",
    "KRW": "₩",
    "KWD": "د.ك",
    "KYD": "$",
    "KZT": "₸",
    "LAK": "₭",
    "LBP": "ل.ل",
    "LKR": "රු",
    "LRD": "$",
    "LSL": "M",
    "LYD": "ل.د",
    "MAD": "د.م.",
    "MDL": "L",
    "MGA": "Ar",
    "MKD": "ден",
    "MMK": "K",
    "MNT": "₮",
    "MOP": "P",
    "MRO": "UM",
    "MRU": "UM",
    "MUR": "₨",
    "MVR": "ރ.",
    "MWK": "MK",
    "MXN": "$",
    "MYR": "RM",
    "MZN": "MT",
    "NAD": "$",
    "NGN": "₦",
    "NIO": "C$",
    "NOK": "kr",
    "NPR": "₨",
    "NZD": "NZ$",
    "OMR": "ر.ع.",
    "PAB": "B/.",
    "PEN": "S/.",
    "PGK": "K",
    "PHP": "₱",
    "PKR": "₨",
    "PLN": "zł",
    "PYG": "₲",
    "QAR": "ر.ق",
    "RON": "lei",
    "RSD": "дин.",
    "RUB": "₽",
    "RWF": "RF",
    "SAR": "ر.س",
    "SBD": "$",
    "SCR": "₨",
    "SDG": "ج.س.",
    "SEK": "kr",
    "SGD": "S$",
    "SHP": "£",
    "SLL": "Le",
    "SOS": "Sh",
    "SPL": "Ł",
    "SRD": "$",
    "STN": "Db",
    "SVC": "$",
    "SYP": "ل.س",
    "SZL": "E",
    "THB": "฿",
    "TJS": "SM",
    "TMT": "m",
    "TND": "د.ت",
    "TOP": "T$",
    "TRY": "₺",
    "TTD": "TT$",
    "TVD": "$",
    "TWD": "NT$",
    "TZS": "Sh",
    "UAH": "₴",
    "UGX": "USh",
    "USD": "$",
    "UYU": "$U",
    "UZS": "сўм",
    "VEF": "Bs",
    "VND": "₫",
    "VUV": "VT",
    "WST": "T",
    "XCD": "$",
    "XDR": "SDR",
    "XOF": "CFA",
    "XPF": "₣",
    "YER": "﷼",
    "ZAR": "R",
    "ZMW": "ZK",
    "ZWD": "Z$"
};



export function getCurrencySymbol(currencyCode) {

    const symbol = currencies[currencyCode];
    return symbol ? symbol : "Unknown";
}