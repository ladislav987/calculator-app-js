const buttonsContainer = document.getElementsByClassName("buttonsContainer")[0];

var inputNumber = " ";
var firstNumbers = 0;
var secondNumbers = 0;
var vysledok = 0;
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
            deleteLastCharacter();
            break;

        case "addition":
            operaciaZnamienka(inputNumber, "plus");

            break;

        case "subtraction":
            operaciaZnamienka(inputNumber, "minus");
            clearInput();
            break;

        case "multiplication":
            operaciaZnamienka(inputNumber, "krat");
            clearInput();
            break;

        case "division":
            operaciaZnamienka(inputNumber, "delene");
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
    // console.log(" začatok addNumber funkcie");

    inputNumber += number;
    document.getElementById("amountInput").innerHTML = inputNumber;

    // console.log("Input number: ", inputNumber);
    // console.log("First number: ", firstNumbers);
    // console.log("Second number: ", secondNumbers);
    // console.log("firstTime: ", firstTime);
    // console.log("vysledok: ", vysledok);
    // console.log("znamienko: ", znamnienkoHore);

    // console.log(" koniec addNumber funkcie");
    // console.log(" ");
}

function operaciaZnamienka(number, znamienko) {
    // console.log(" začatok operaciaZnamienka funkcie");

    if (znamienko != undefined) {
        znamnienkoHore = znamienko;
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



    // console.log("Input number: ", inputNumber);
    // console.log("First number: ", firstNumbers);
    // console.log("Second number: ", secondNumbers);
    // console.log("firstTime: ", firstTime);
    // console.log("vysledok: ", vysledok);
    // console.log("znamienko: ", znamnienkoHore);

    // console.log(" koniec operaciaZnamienka funkcie");
    // console.log(" ");
}



function spocitaj() {
    // console.log(" začatok spocitaj funkcie");

    if (secondNumbers == 0) {
        operaciaZnamienka(inputNumber);
    }

    if (1) {
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
    }
    document.getElementById("amountOutput").innerHTML = vysledok;

    // console.log("Input number: ", inputNumber);
    // console.log("First number: ", firstNumbers);
    // console.log("Second number: ", secondNumbers);
    // console.log("firstTime: ", firstTime);
    // console.log("vysledok: ", vysledok);
    // console.log("znamienko: ", znamnienkoHore);
    // console.log(" ");

    // console.log(" koniec spocitaj funkcie");

    resetCalculator();
}


function clearInput() {
    // console.log(" začiatok clearInput funkcie");

    document.getElementById("amountInput").innerHTML = 0;
    inputNumber = "";

    // console.log(" koniec clearInput funkcie");
    // console.log(" ");
}



function resetCalculator() {
    // console.log(" začiatok resetCalculator funkcie");

    inputNumber = "";
    firstNumbers = 0;
    secondNumbers = 0;
    znamnienkoHore = "";
    firstTime = true;

    // console.log("Input number: ", inputNumber);
    // console.log("First number: ", firstNumbers);
    // console.log("Second number: ", secondNumbers);
    // console.log("firstTime: ", firstTime);
    // console.log("vysledok: ", vysledok);
    // console.log("znamienko: ", znamnienkoHore);
    // console.log(" ");


    // console.log(" koniec resetCalculator funkcie");
}

function resetVysledok() {
    document.getElementById("amountOutput").innerHTML = 0;
    vysledok = 0;
}

function deleteLastCharacter() {
    let result = inputNumber.slice(0 , -1);
    inputNumber = result;
    document.getElementById("amountInput").innerHTML = inputNumber;
}










































// //! Scénar 1

// // 1. po stlačení tlačitka sa vola funckia addNumber() ktorá do inputu napíše číslo
// // 2. stačím tlačitko operácie, volá sa funkcia operaciaZnamienka() ktorá pozera či je už zadané znamienko a vynuluje sa input
// // 3. zapíšem druhé číslo
// // 4. stlačím rovná sa

// //! Scénar 2

// // 1. prvé stlačim rovná sa


// //? pridáva čisla do inputu aby sa vykreslili

// function addNumber(number) {
//     console.log(" začatok addNumber funkcie");

//     inputNumber += number;
//     document.getElementById("amountInput").innerHTML = inputNumber;

//     console.log(" koniec addNumber funkcie");
// }

// //? pokiaľ je definované znamienko pridá ho do premennej
// //? kontroluje či je zadavane prvé číslo
// function operaciaZnamienka(number, znamienko) {
//     console.log(" začatok operaciaZnamienka funkcie");

//     if (znamienko != undefined) {
//         znamnienkoHore = znamienko;
//     }

//     if (firstTime) {
//         firstNumbers = Number(number);
//         firstTime = false;
//     }
//     else secondNumbers = Number(number);

//     console.log(" koniec operaciaZnamienka funkcie");
// }

// function spocitaj() {
//     console.log(" začatok spocitaj funkcie");

//     let vysledok = 0;

//     if (firstNumbers != 0) {
//         console.log("firstNumber nieje 0la!!!!!!!!!!!!!!!!!!!!!!!!!!!! ale je:", firstNumbers);
//         if (znamnienkoHore === "plus") {
//             vysledok = firstNumbers + secondNumbers;
//         }
//         if (znamnienkoHore === "minus") {
//             vysledok = firstNumbers - secondNumbers;
//         }
//         if (znamnienkoHore === "krat") {
//             vysledok = firstNumbers * secondNumbers;
//         }
//         if (znamnienkoHore === "delene") {
//             vysledok = firstNumbers / secondNumbers;
//         }


//         document.getElementById("amountInput").innerHTML = vysledok;
//         firstNumbers = vysledok;


//     }

//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);

//     console.log(" koniec spocitaj funkcie");
//     // clearInputNumber();
// }



// function resetOutput() {
//     console.log(" začiatok resetOutput funkcie");

//     document.getElementById("amountInput").innerHTML = 0;
//     inputNumber = "";
//     firstNumbers = 0;

//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);


//     console.log(" koniec resetOutput funkcie");
// }




// function clearInput() {
//     console.log(" začiatok clearInput funkcie");

//     document.getElementById("amountInput").innerHTML = 0;
//     inputNumber = "";

//     console.log(" koniec clearInput funkcie");
// }

// function clearInputNumber() {
//     console.log(" začiatok clearInputNumber funkcie");

//     inputNumber = "";

//     console.log(" koniec clearInputNumber funkcie");

// }

// // function resetAll() {
// //     document.getElementById("amountInput").innerHTML = 0;
// //     inputNumber = "";
// //     firstNumbers = "";
// //     secondNumbers = "";

// //     console.log("Input number: ", inputNumber);
// //     console.log("First number: ", firstNumbers);
// //     console.log("Second number: ", secondNumbers);
// // }



// // function count(number) {

// //     let skuska = "";

// //     skuska = number.split("+");

// //     console.log(skuska[0]);
// // }




// function addNumber(number) {
//     console.log(" začatok addNumber funkcie");

//     inputNumber += number;
//     document.getElementById("amountInput").innerHTML = inputNumber;

//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);
//     console.log("firstTime: ", firstTime);
//     console.log("vysledok: ", vysledok);
//     console.log("znamienko: ", znamnienkoHore);

//     console.log(" koniec addNumber funkcie");
//     console.log(" ");
// }

// function operaciaZnamienka(number, znamienko) {
//     console.log(" začatok operaciaZnamienka funkcie");

//     if (znamienko != undefined) {
//         znamnienkoHore = znamienko;
//     }

//     if (firstTime) {
//         firstNumbers = Number(number);
//         firstTime = false;
//         clearInput();
//     }
//     else {
//         secondNumbers = Number(number);
//         spocitaj();
//         resetCalculator();

//     }

//     clearInput();


//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);
//     console.log("firstTime: ", firstTime);
//     console.log("vysledok: ", vysledok);
//     console.log("znamienko: ", znamnienkoHore);

//     console.log(" koniec operaciaZnamienka funkcie");
//     console.log(" ");
// }





// function spocitaj() {
//     console.log(" začatok spocitaj funkcie");

//     if (firstNumbers != 0) {
//         console.log("firstNumber nieje 0la!!!!!!!!!!!!!!!!!!!!!!!!!!!! ale je:", firstNumbers);
//         if (znamnienkoHore === "plus") {
//             vysledok = firstNumbers + secondNumbers;
//         }
//         if (znamnienkoHore === "minus") {
//             vysledok = firstNumbers - secondNumbers;
//         }
//         if (znamnienkoHore === "krat") {
//             vysledok = firstNumbers * secondNumbers;
//         }
//         if (znamnienkoHore === "delene") {
//             vysledok = firstNumbers / secondNumbers;
//         }


//         document.getElementById("amountOutput").innerHTML = vysledok;
//         firstNumbers = vysledok;


//     }

//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);
//     console.log("firstTime: ", firstTime);
//     console.log("vysledok: ", vysledok);
//     console.log("znamienko: ", znamnienkoHore);
//     console.log(" ");

//     console.log(" koniec spocitaj funkcie");
//     // clearInputNumber();
// }


// function clearInput() {
//     console.log(" začiatok clearInput funkcie");

//     document.getElementById("amountInput").innerHTML = 0;
//     inputNumber = "";

//     console.log(" koniec clearInput funkcie");
//     console.log(" ");
// }

// function resetCalculator() {
//     console.log(" začiatok resetCalculator funkcie");

//     inputNumber = "";
//     firstNumbers = 0;
//     secondNumbers = 0;
//     znamnienkoHore = "";
//     firstTime= true;

//     console.log("Input number: ", inputNumber);
//     console.log("First number: ", firstNumbers);
//     console.log("Second number: ", secondNumbers);
//     console.log("firstTime: ", firstTime);
//     console.log("vysledok: ", vysledok);
//     console.log("znamienko: ", znamnienkoHore);
//     console.log(" ");


//     console.log(" koniec resetCalculator funkcie");
// }














