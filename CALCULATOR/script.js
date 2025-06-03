let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    let currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue * currentValue;
    }
}

function calculateSquareRoot() {
    let currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sqrt(currentValue);
    }
}