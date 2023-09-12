let start = document.getElementById('start');
let btnBox = document.querySelector('.btn-box')

let resultElement;
let result = 0;

function increase() {
    result += 1;
    resultElement.textContent = result;
}

function decrease(){
    result -= 1;
    resultElement.textContent = result;
}

function reset(){
    result = 0;
    resultElement.textContent = result;
}

function increaseBtn() {
    let increaseBtn = document.createElement('button');
    increaseBtn.setAttribute('id', 'increaseBtn');
    increaseBtn.textContent = 'Increase';
    increaseBtn.addEventListener('click', increase);
    return increaseBtn;
}

function decreaseBtn() {
    let decreaseBtn = document.createElement('button');
    decreaseBtn.setAttribute('id', 'decreaseBtn');
    decreaseBtn.textContent = 'Decrease';
    decreaseBtn.addEventListener('click', decrease);
    return decreaseBtn;
}

function resetBtn() {
    let resetBtn = document.createElement('button');
    resetBtn.setAttribute('id', 'resetBtn');
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', reset);
    return resetBtn;
}

function resultBox() {
    let resultBox = document.createElement('div');
    resultBox.setAttribute('id', 'resultBox');
    resultBox.textContent = 0;
    resultElement = resultBox;
    return resultBox;
}

function addBtn() {
    let incBtn = increaseBtn();
    let decBtn = decreaseBtn();
    let resBtn = resetBtn();
    let resBox = resultBox();
    btnBox.append(incBtn, resBox, decBtn, resBtn);
    btnBox.classList.add('show');
    //removeEventListener
    start.removeEventListener('click', addBtn);
    start.textContent = 'ENJOY!';
}

start.addEventListener('click', addBtn);
