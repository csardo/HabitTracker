class Habit {
    constructor(title, frequency, rate) {
        this.title = title
        this.frequency = frequency
        this.rate = rate
    }
}

const form = document.querySelector('#habit-creator')
form.addEventListener('submit', (e) => {
    console.log('form submitted')
    e.preventDefault();
})