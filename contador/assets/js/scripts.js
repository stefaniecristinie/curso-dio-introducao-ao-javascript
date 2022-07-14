var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var adicionar = document.getElementById('adicionar')
var subtrair = document.getElementById('subtrair')

//subtrair adicionar
    
adicionar.addEventListener('click', increment)
subtrair.addEventListener('click', decrement)

function increment() {
    if(currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        color();
    }
}


function decrement() {
    if(currentNumber > -5) {
        currentNumber =  currentNumber - 1; 
        currentNumberWrapper.innerHTML = currentNumber;
        color();
    }
}

function color() {
    if(currentNumber < 0) {
        currentNumberWrapper.className = 'red';
    } else {
        currentNumberWrapper.className = 'black';
    }
}