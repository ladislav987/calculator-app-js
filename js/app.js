const buttonsContainer = document.getElementsByClassName("buttonsContainer")[0];

var inputNumber = " ";
var firstNumbers = 0;
var secondNumbers = 0;
var result = 0;
var sign = "";

var firstTime = true;

buttonsContainer.addEventListener('click', event => {
    let elementID = event.target.id;

    switch (elementID) {
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
            operaciaZnamienka(inputNumber, "addition");

            break;

        case "subtraction":
            operaciaZnamienka(inputNumber, "subtraction");
            clearInput();
            break;

        case "multiplication":
            operaciaZnamienka(inputNumber, "multiplication");
            clearInput();
            break;

        case "division":
            operaciaZnamienka(inputNumber, "division");
            clearInput();
            break;

        case "decimalPoint":
            addNumber(".");
            break;

        case "reset":
            resetCalculator();
            resetVysledok();
            break;

        case "equals":
            spocitaj();
            break;
    }
})



// //? Function section

function addNumber(number) {
    inputNumber += number;
    document.getElementById("amountInput").innerHTML = inputNumber;
}

function operaciaZnamienka(number, znamienko) {
    if (znamienko != undefined) {
        sign = znamienko;
    }

    if (firstTime) {
        firstNumbers = Number(number);
        firstTime = false;
        clearInput();
    }
    else {
        secondNumbers = Number(number);
        clearInput();
    }
}



function spocitaj() {
    if (secondNumbers == 0) {
        operaciaZnamienka(inputNumber);
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
    document.getElementById("amountOutput").innerHTML = result;

    resetCalculator();
}


function clearInput() {
    document.getElementById("amountInput").innerHTML = 0;
    inputNumber = "";
}



function resetCalculator() {
    inputNumber = "";
    firstNumbers = 0;
    secondNumbers = 0;
    sign = "";
    firstTime = true;

}

function resetVysledok() {
    document.getElementById("amountOutput").innerHTML = 0;
    result = 0;
}

function deleteLastCharacter() {
    let result = inputNumber.slice(0, -1);
    inputNumber = result;
    document.getElementById("amountInput").innerHTML = inputNumber;
}














