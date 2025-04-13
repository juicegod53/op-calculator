function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return b - a
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator == "+") {
        add(a,b)
    } else if (operator == "-") {
        subtract(a,b)
    } else if (operator == "*") {
        multiply(a,b)
    } else if (operator == "/") {
        divide(a,b)
    }
}
let buttons = document.querySelectorAll('button');

for (i of buttons) {
    i.addEventListener('click', updateScreen)
}

function updateScreen(e) {
    document.querySelector("#screen").innerText += e.target.innerText
}