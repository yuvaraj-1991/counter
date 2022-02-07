// UI Variables

let counterValue = document.querySelector('#value')
const increaseCount = document.querySelector('#increment')
const decreaseCount = document.querySelector('#decrement')

increaseCount.addEventListener('click', increaseFunc) 
decreaseCount.addEventListener('click', decreaseFunc)

let count = 0

// Creating functions for Incrementing and Decrementing 

function increaseFunc() {
    count++
    counterValue.innerHTML = count
}

function decreaseFunc() {
    if(count <=0) {
        count = 0
    } else {
        count--
        counterValue.innerHTML = count
    }
    
}