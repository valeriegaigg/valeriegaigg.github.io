let hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (hours = isMorning) {
    const welcome = document.querySelector('#welcome')
    welcome.textContent = "Good Morning!"
} 
else if (hours = isAfternoon) {
    const welcome = document.querySelector('#welcome')
    welcome.textContent = "Good Afternoon!"
} else {
    const welcome = document.querySelector('#welcome')
    welcome.textContent = "Good Evening!"
}

//assignment 4
const key = "It's a secret to everybody."

localStorage.setItem(key, 'Zelda?')

const buttonHide = document.querySelector('#hide')
buttonHide.addEventListener('click', () => {
    localStorage.removeItem(key)
})