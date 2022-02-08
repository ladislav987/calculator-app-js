const buttonsContainer = document.getElementsByClassName("buttonsContainer")[0];
var inputNumber = " ";
var firstNumbers = 0;
var secondNumbers = 0;
var znamnienkoHore = "";

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
            console.log("6");
            break;

        case "addition":
            operation(inputNumber, "plus");
            resetOutput();

            break;

        case "subtraction":
            operation(inputNumber, "minus");
            resetOutput();
            break;

        case "multiplication":
            operation(inputNumber, "krat");
            resetOutput();
            break;

        case "division":
            operation(inputNumber, "delene");
            resetOutput();
            break;

        case "decimalPoint":
            addNumber(".");
            break;

        case "reset":
            resetOutput();
            firstTime = true;

            break;

        case "equals":
            operation(inputNumber);

            spocitaj();
            break;

        default:
            console.log("ine")
            break;
    }

    if (elementID === "zero") {
        console.log("teraz");
    }
})



//? Function section

function addNumber(number) {
    inputNumber += number;
    document.getElementById("amountOutput").innerHTML = inputNumber;
}

function operation(number, znamienko) {
    if (znamienko != undefined) {
        znamnienkoHore = znamienko;
    }
    console.log(znamnienkoHore);
    if (firstTime) {
        firstNumbers = Number(number);
        firstTime = false;
    }
    else secondNumbers = Number(number);
}

function spocitaj() {
    let vysledok = 0;
    console.log(znamnienkoHore);
    if (znamnienkoHore === "plus") {
        vysledok = firstNumbers + secondNumbers;
    }
    if (znamnienkoHore === "minus") {
        vysledok = firstNumbers - secondNumbers;
    }
    if (znamnienkoHore === "krat") {
        vysledok = firstNumbers * secondNumbers;
    }
    if (znamnienkoHore === "delene") {
        vysledok = firstNumbers / secondNumbers;
    }


    document.getElementById("amountOutput").innerHTML = vysledok;
    firstNumbers = vysledok;

    console.log("Input number: ", inputNumber);
    console.log("First number: ", firstNumbers);
    console.log("Second number: ", secondNumbers);
}



function resetOutput() {
    document.getElementById("amountOutput").innerHTML = 0;
    inputNumber = "";

    console.log("Input number: ", inputNumber);
    console.log("First number: ", firstNumbers);
    console.log("Second number: ", secondNumbers);
}

function resetAll() {
    document.getElementById("amountOutput").innerHTML = 0;
    inputNumber = "";
    firstNumbers = "";
    secondNumbers = "";

    console.log("Input number: ", inputNumber);
    console.log("First number: ", firstNumbers);
    console.log("Second number: ", secondNumbers);
}



// function count(number) {

//     let skuska = "";

//     skuska = number.split("+");

//     console.log(skuska[0]);
// }




