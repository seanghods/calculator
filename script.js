function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
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
    switch (operator) {
        case 'add':
            return add(firstNumber, secondNumber);
        case 'sub':
            return subtract(firstNumber, secondNumber);
        case 'mult':
            return multiply(firstNumber, secondNumber);
        case 'div':
            return divide(firstNumber, secondNumber);
    }
}