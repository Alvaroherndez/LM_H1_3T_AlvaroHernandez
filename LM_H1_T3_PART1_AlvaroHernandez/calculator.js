document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');
    let displayValue = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;
  
    const updateDisplay = () => {
      display.textContent = displayValue;
    };
  
    const inputDigit = (digit) => {
      if (waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
      } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
      }
      updateDisplay();
    };
  
    const inputDecimal = () => {
      if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
      }
    };
  
    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(displayValue);
        if (operator === 'square-root') {
          if (inputValue >= 0) {
            const result = calculate(inputValue, null, operator);
            displayValue = `${parseFloat(result.toFixed(7))}`;
          } else {
            displayValue = 'Error';
          }
        } else {
          if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
          }
          if (firstOperand === null) {
            firstOperand = inputValue;
          } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            displayValue = `${parseFloat(result.toFixed(7))}`;
            firstOperand = result;
          }
          waitingForSecondOperand = true;
          operator = nextOperator;
        }
      };
      
  
    const calculate = (firstOperand, secondOperand, operator) => {
      switch (operator) {
        case 'add':
          return firstOperand + secondOperand;
        case 'subtract':
          return firstOperand - secondOperand;
        case 'multiply':
          return firstOperand * secondOperand;
        case 'divide':
          return firstOperand / secondOperand;
        case 'percentage':
          return firstOperand * (secondOperand / 100);
        case 'square':
          return Math.pow(firstOperand, 2);
        case 'square-root':
          return Math.sqrt(firstOperand);
        default:
          return secondOperand;
      }
    };
  
    keys.addEventListener('click', (e) => {
      const { target } = e;
      if (!target.matches('button')) {
        return;
      }
      if (target.classList.contains('key--operator')) {
        handleOperator(target.dataset.action);
        updateDisplay();
        return;
      }
      if (target.dataset.action === 'decimal') {
        inputDecimal();
        updateDisplay();
        return;
      }
      if (target.dataset.action === 'clear') {
        displayValue = '0';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
        return;
      }
      if (target.dataset.action === 'calculate') {
        handleOperator(target.dataset.action);
        updateDisplay();
        return;
      }
      inputDigit(target.textContent);
      updateDisplay();
    });
  });


