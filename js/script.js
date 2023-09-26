function increase(result, resultElement) {
  result += 1;
  resultElement.textContent = result;
  return result;
}

function decrease(result, resultElement) {
  result -= 1;
  resultElement.textContent = result;
  return result;
}

function reset(result, resultElement) {
  result = 0;
  resultElement.textContent = result;
  return result;
}

function createButton(id, text) {
  let button = document.createElement('button');
  button.setAttribute('id', id);
  button.textContent = text;
  return button;
}

function addButtons() {
    let result = 0;
    let resultElement = document.createElement('div');
    resultElement.setAttribute('id', 'resultBox');
    resultElement.textContent = result;
    let btnBox = document.querySelector('.btn-box');

    let incBtn = createButton('increaseBtn', 'Increase');
    let decBtn = createButton('decreaseBtn', 'Decrease');
    let resBtn = createButton('resetBtn', 'Reset');

    btnBox.addEventListener('click', event =>{
      let target = event.target;
      if (target.id === 'increaseBtn'){
        console.log('increase');
        result = increase(result, resultElement);
      }
      if (target.id === 'decreaseBtn'){
        console.log('decrease');
        result = decrease(result, resultElement);
      }
      if (target.id === 'resetBtn'){
        console.log('reset')
        result = reset(result, resultElement);
      }
    })

    btnBox.append(incBtn, resultElement, decBtn, resBtn);
    btnBox.classList.add('show');

    // Remove the event listener
    start.removeEventListener('click', addButtons);
    start.textContent = 'ENJOY!';
  }

let start = document.getElementById('start');
start.addEventListener('click', addButtons);