const buttonsContainer = document.getElementsByClassName("buttonsContainer")[0];

let inputNumber = " ";
let firstNumbers = 0;
let secondNumbers = 0;
let result = 0;
let sign = "";

let firstTime = true;

buttonsContainer.addEventListener('click', event => {

    switch (event.target.id) {
        case "nine":
            addNumber(9);
            break;

        case "eight":
            addNumber(8);
            break;

        case "seven":
            addNumber(7);
            break;

        case "six":
            addNumber(6);
            break;

        case "five":
            addNumber(5);
            break;

        case "four":
            addNumber(4);
            break;

        case "three":
            addNumber(3);
            break;

        case "two":
            addNumber(2);
            break;

        case "one":
            addNumber(1);
            break;

        case "zero":
            addNumber(0);
            break;

        case "del":
            deleteLastCharacter();
            break;

        case "addition":
            mathOperation("addition");

            break;

        case "subtraction":
            mathOperation("subtraction");
            break;

        case "multiplication":
            mathOperation("multiplication");
            break;

        case "division":
            mathOperation("division");
            break;

        case "decimalPoint":
            addNumber(".");
            break;

        case "reset":
            resetCalculator();
            clearResult();
            break;

        case "equals":
            count();
            break;
    }
})



// //? Function section

function addNumber(number) {
    inputNumber += number;
    amountInput(inputNumber);
}

function mathOperation(signFunction) {
    if (signFunction != undefined) {
        sign = signFunction;
    }

    if (firstTime) {
        firstNumbers = Number(inputNumber);
        firstTime = false;
        clearInput();
    }
    else {
        secondNumbers = Number(inputNumber);
        clearInput();
    }
}



function count() {
    if (secondNumbers == 0) {
        mathOperation();
    }

    if (1) {
        if (sign === "addition") {
            result = firstNumbers + secondNumbers;
        }
        if (sign === "subtraction") {
            result = firstNumbers - secondNumbers;
        }
        if (sign === "multiplication") {
            result = firstNumbers * secondNumbers;
        }
        if (sign === "division") {
            result = firstNumbers / secondNumbers;
        }
    }
    amountOutput(result);

    resetCalculator();
}


function clearInput() {
    amountInput(0);
    inputNumber = "";
}



function resetCalculator() {
    inputNumber = "";
    firstNumbers = 0;
    secondNumbers = 0;
    sign = "";
    firstTime = true;

    amountInput(0);
}

function clearResult() {
    amountOutput(0);
    result = 0;
}

function deleteLastCharacter() {
    let result = inputNumber.slice(0, -1);
    inputNumber = result;
    amountInput(inputNumber);
}


function amountOutput(arg) {
    document.getElementById("amountOutput").innerHTML = arg;
}

function amountInput(arg) {
    document.getElementById("amountInput").innerHTML = arg;
}