const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector('#btn');
const color = document.querySelector(".color");

function colorSubmit(){
    const gethex = getRandomHex();
    document.body.style.backgroundColor = gethex
    color.textContent = gethex
}

function getRandomHex() {
    let finalHex = "#";
    for (let i = 0; i < 6; i++) {
        finalHex = finalHex.concat(hex[Math.floor(Math.random() * hex.length)]);
    }
    return finalHex
}

btn.addEventListener('click',colorSubmit)