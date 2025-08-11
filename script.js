// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString(); // Basic evaluation
        display.value = currentInput;
        resultDisplayed = true;
      } catch (error) {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
        currentInput = '';
      }
      currentInput += value;
      display.value = currentInput;
      resultDisplayed = false;
    }
  });
});
