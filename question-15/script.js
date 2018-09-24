// eslint-disable-next-line
const numberContainer = document.getElementById('keypad');
// eslint-disable-next-line
const display = document.getElementById('calc-input');

let operation = '';
let firstNumber = '';
let secondNumber = '';

const oprList = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/',
};

const appendNumber = (newNumber) => {
  if (operation === '') {
    firstNumber += newNumber;
    display.value = firstNumber;
  } else {
    secondNumber += newNumber;
    display.value = firstNumber + oprList[operation] + secondNumber;
  }
};

const updateOperation = (opr) => {
  operation = opr;
  display.value = firstNumber + oprList[operation];
};

const performOperation = () => {
  const frstNum = Number(firstNumber);
  const secondNum = Number(secondNumber);

  let finalVal = 0;

  switch (oprList[operation]) {
    case '+':
      finalVal = frstNum + secondNum;
      break;
    case '-':
      finalVal = frstNum - secondNum;
      break;
    case '*':
      finalVal = frstNum * secondNum;
      break;
    case '/':
      finalVal = frstNum / secondNum;
      break;
    default:
      console.log('default');
  }
  display.value = `${display.value} = ${finalVal}`;
};

const clearInput = () => {
  operation = '';
  firstNumber = '';
  secondNumber = '';
  display.value = '';
};

const keypadClickEvent = (event) => {
  const keypadValue = event.target.dataset.value;

  if (keypadValue >= '0' && keypadValue <= '9') {
    appendNumber(keypadValue);
  } else if (keypadValue === 'plus' || keypadValue === 'minus' || keypadValue === 'multiply' || keypadValue === 'divide') {
    updateOperation(keypadValue);
  } else if (keypadValue === 'equal') {
    performOperation();
  } else if (keypadValue === 'clear') {
    clearInput();
  }
};

numberContainer.addEventListener('click', keypadClickEvent);
