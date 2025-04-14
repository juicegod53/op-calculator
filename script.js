let screen = document.querySelector("#screen")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b)
    } else if (operator == "-") {
        return subtract(a,b)
    } else if (operator == "*") {
        return multiply(a,b)
    } else if (operator == "/") {
        return divide(a,b)
    }
}
let buttons = document.querySelectorAll('button');
let operators = ["+","-","/","*","="]

for (i of buttons) {
    if (i.innerText == "AC") {
        i.addEventListener("click", clearScreen)
    } else if (operators.includes(i.innerText)) {
        i.addEventListener("click", evaluate)
    } else {
        i.addEventListener('click', updateScreen)
    }
}

function clearScreen(e) {
    screen.innerText = ""
    lastInputOperator = false
    if (e.target.innerText == "AC") {
        num1 = null
    }
}

function updateScreen(e) {
    if (lastInputOperator) {
        clearScreen(e)
    }
    if (lastInput == "=") {
        num1 = null
    }
    screen.innerText += e.target.innerText
    lastInputOperator = false
}

let num1 = null;
let lastInputOperator = false
let lastInput = ""

function evaluate(e) {
    lastInputOperator = true
    if (num1 && lastInput != "=") {
        num2 = screen.innerText
        screen.innerText = operate(operator, parseFloat(num1), parseFloat(num2))
    }
    num1 = screen.innerText
    lastInput = e.target.innerText
    if (lastInput != "=") {
        operator = e.target.innerText
    }
}

