import { v4 as uuidv4 } from 'uuid';
import { postData } from '../../modules/http';
const form = document.forms.create_card

let userData = JSON.parse(localStorage.getItem("user"))
const currentDate = new Date()

form.onsubmit = (e) => {
  e.preventDefault()
  
  let card = {
    "id": uuidv4(),
    "user_id": userData.id,
    "date": date_func(currentDate)
  }
  let fm = new FormData(form)
  
  fm.forEach((value, key) => {
    card[key] = value
  })
  
  postData("/cards", card)
  
  form.reset()
}

function date_func(currentDate) {
  const year = currentDate.getFullYear();
  const month = addLeadingZero(currentDate.getMonth() + 1);
  const day = addLeadingZero(currentDate.getDate());
  
  return  `${year}-${month}-${day}`;
  
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}