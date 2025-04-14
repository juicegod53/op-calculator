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
    if (e.target.innerText == "CE") {
        if (!lastInputOperator) {
            screen.innerText = screen.innerText.substring(0,screen.innerText.length-1)
        }
        return
    }
    if (lastInputOperator) {
        clearScreen(e)
    }
    if (lastInput == "=") {
        num1 = null
    }
    if ((e.target.innerText == "." && screen.innerText.includes(".")) || (screen.innerText.length == 17)) {
        return
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
        result = operate(operator, parseFloat(num1), parseFloat(num2))
        screen.innerText = Math.round(result * (10**6)) / (10**6)
    }
    num1 = screen.innerText
    lastInput = e.target.innerText
    if (lastInput != "=") {
        operator = e.target.innerText
    }
}

