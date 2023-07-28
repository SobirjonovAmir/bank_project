import { getData } from '/modules/http';
const form = document.forms.login
const inputs = document.querySelectorAll('input')
let userData = JSON.parse(localStorage.getItem("email"))
const email = document.querySelector(".email")
email.value = userData

form.onsubmit = (e) => {
    e.preventDefault();
    let formData = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        formData[key] = value
    })

    inputs.forEach(input => {
        if (input.value === '') {
            input.style.border = "1px solid red"
        } else {
            input.style.border = "1px solid green"
        }
    })

    for (const key in formData) {
        const element = formData[key];
        if (element === "") {
            return
        }
    }


    getData('/users?email=' + formData.email)
        .then((res) => {
            let [user] = res.data

            if (user) {
                if (user.password === formData.password) {
                    delete user.password

                    localStorage.setItem('user', JSON.stringify(user))

                    location.assign('/')
                } else {
                    alert('не правильный пароль')
                }
            } else {
                alert('сначала зарегистрируйтесь')
            }
        })
}