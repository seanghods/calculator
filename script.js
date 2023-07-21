let firstNumber = '';
let secondNumber = '';
let operator = '';
let beforeOperator = 1;

const screenSpace = document.querySelector(".screenspace");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equal")

window.onload = () => {
    numberButtonFunc();
    operatorButtonFunc();
    clearButtonFunc();
    equalButtonFunc();
}

function numberButtonFunc() {
    for (const each of numberButtons) {
        each.addEventListener('click', () => {
            if (beforeOperator) {
                firstNumber += each.innerHTML;
                screenSpace.innerHTML = firstNumber;
            } else {
                secondNumber += each.innerHTML;
                screenSpace.innerHTML = secondNumber;
            }
        })
    }
}

function operatorButtonFunc() {
    for (const each of operatorButtons) {
        each.addEventListener('click', () => {
            operator = each.id;
            screenSpace.innerHTML = each.innerHTML;
            secondNumber = '';
            beforeOperator = 0;
        })
    }
}

function clearButtonFunc() {
    clearButton.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        screenSpace.innerHTML = 'CLEARED';
        beforeOperator = 1;
    })
}

function equalButtonFunc() {
    equalButton.addEventListener('click', () => {
        let result = operate(firstNumber, secondNumber, operator);
        firstNumber = result;
    })
}

function add(firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case 'plus':
            result = add(firstNumber, secondNumber)
            screenSpace.innerHTML = result;
            return result;
        case 'sub':
            result = subtract(firstNumber, secondNumber)
            screenSpace.innerHTML = result;
            return result;
        case 'mult':
            result = multiply(firstNumber, secondNumber)
            screenSpace.innerHTML = result;
            return result;
        case 'div':
            result = divide(firstNumber, secondNumber)
            screenSpace.innerHTML = result;
            return result;
    }
}