function header(place) {
    let headers = document.createElement('div')
    let my_action = document.createElement('div')
    let email = document.createElement('div')
    let home_a = document.createElement('a')
    let wallet_a = document.createElement('a')
    let transactions_a = document.createElement('a')
    let email_a = document.createElement('a')
    let icon = document.createElement('img')

    headers.classList.add('container', "header-items")
    my_action.classList.add('my_action')
    email.classList.add('email')
    home_a.classList.add('a')
    wallet_a.classList.add('a')
    transactions_a.classList.add('a')
    email_a.classList.add('a')

    home_a.href = 'index.html'
    wallet_a.href = 'pages/wallets/index.html'
    transactions_a.href = 'pages/create-transaction/index.html'
    email_a.href = '#'


    home_a.innerHTML = 'Главная'
    wallet_a.innerHTML = 'Мои кошельки'
    transactions_a.innerHTML = 'Мои транзакции'
    email_a.innerHTML = 'alexadams@google.com'

    icon.src = '../icons/log-out.png'

    icon.onclick = () => {
        window.location.href = "./log.html"
    }

    headers.append(my_action, email)
    my_action.append(home_a, wallet_a, transactions_a)
    email.append(email_a, icon)
    place.append(headers)

}
header(document.querySelector('header'))