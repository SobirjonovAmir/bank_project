import { v4 as uuidv4 } from 'uuid';
import { postData } from '/modules/http';
const form = document.forms.signup
const inputs = document.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {
        id: uuidv4()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    inputs.forEach(input => {
        if (input.value === '') {
            input.style.border = "1px solid red"
        } else {
            input.style.border = "1px solid green"
        }
    })

    for (const key in user) {
        const element = user[key];
        if (element === "") {
            return
        }
    }

    postData("/users", user)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('email', JSON.stringify(user.email))
                location.assign('/pages/login/')
            }
        })
}