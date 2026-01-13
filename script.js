const input = document.getElementById('display');

function appendToCalc(element) {
    input.value += element;
}

function calculate() {
    try {
        const result = eval(input.value);
        input.value = result.toFixed(2);
    } catch {
        input.value = "Error";
    }
}

function clearDisplay() {
    input.value = "";
}
