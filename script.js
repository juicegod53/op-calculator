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

function updateScreen(e) {
    if (lastInputOperator) {
        clearScreen()
    }
    screen.innerText += e.target.innerText
    lastInputOperator = false
}

function clearScreen() {
    screen.innerText = ""
    lastInputOperator = false
}

num1 = null
lastInputOperator = false

function evaluate(e) {
    lastInputOperator = true
    if (num1) {
        num2 = screen.innerText
        screen.innerText = operate(operator, parseFloat(num1), parseFloat(num2))
    }
    num1 = screen.innerText
    operator = e.target.innerText
}