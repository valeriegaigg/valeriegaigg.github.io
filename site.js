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


//assignment 5
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const buttonPrev = document.querySelector('#prev')
const buttonNext = document.querySelector('#next')

buttonPrev.addEventListener('click', () => {
    currentImage++ 
    showImages()
})

buttonNext.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage--
    showImages()
}, 5000)


//assignment 6 

const buttonAdd = document.querySelector('#add')
const input = document.querySelector('#new-todo')
const todoList = document.querySelector('.todo-list')

//Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {

    todoList.innerHTML = ''
    
    // Create and add new list items to the DOM
    todos.forEach(({text}) => {
        const li = document.createElement('li')
        li.textContent = text
        todoList.append(li)
    })

} 
renderTodos()

buttonAdd.addEventListener('click', () => {
    // Add a new item to the list
    todos.push({ text: input.value, completed: false })

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))

    renderTodos()

    input.value = ''
    input.focus()
})






