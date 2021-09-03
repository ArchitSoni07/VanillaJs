var count = 0;

const btnIncrease = document.querySelector('.btn-Increase');
const btnDecrease = document.querySelector('.btn-Decrease');
const btnReset = document.querySelector('.btn-Reset');

const value = document.querySelector('#value');


function increaseCount(){
    count += 1;
    value.textContent = count;
}

function decreaseCount(){
    count -= 1;
    value.textContent = count;
}

function resetCount(){
    count = 0;
    console.log(count);
    value.textContent = count;
}


btnIncrease.addEventListener("click", increaseCount);
btnDecrease.addEventListener("click", decreaseCount);
btnReset.addEventListener("click", resetCount);



