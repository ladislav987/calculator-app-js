const themeButton = document.getElementById("themeBtn");
const body = document.getElementById("body");

const first = document.getElementById("inputOne");
const second = document.getElementById("inputTwo");
const third = document.getElementById("inputThree");

let themeClass = window.localStorage.getItem("theme") || window.localStorage.setItem("theme", "theme-1");



if (document.getElementById("body").className == "") {
    if (themeClass == undefined) {
        body.classList.add("theme-1");
        first.checked = true;
    }
    else {
        body.classList.add(themeClass);
        radioBtnCheck();
    }
}


themeButton.addEventListener("click", () => {
    themeHandler();
});


function themeHandler() {
    let themeSet;

    let bodyOldClass = document.getElementById("body").className;
    themeClass = window.localStorage.getItem("theme");

    if (themeClass === "theme-1") {
        themeSet = "theme-2";
        second.checked = true;
        second.style.visibility = "visible";

        first.style.visibility = "hidden";
        third.style.visibility = "hidden";
    }
    else if (themeClass === "theme-2") {
        themeSet = "theme-3";
        third.checked = true;
        third.style.visibility = "visible";

        first.style.visibility = "hidden";
        second.style.visibility = "hidden";
    }
    else if (themeClass === "theme-3") {
        themeSet = "theme-1";
        first.checked = true;
        first.style.visibility = "visible";

        second.style.visibility = "hidden";
        third.style.visibility = "hidden";
    }


    window.localStorage.setItem("theme", themeSet);
    themeClass = window.localStorage;
    body.classList.remove(bodyOldClass);
    body.classList.add(themeSet);

}

function radioBtnCheck() {
    if (themeClass === "theme-1") {
        first.checked = true;

        second.style.visibility = "hidden";
        third.style.visibility = "hidden";
    }
    else if (themeClass === "theme-2") {
        second.checked = true;

        first.style.visibility = "hidden";
        third.style.visibility = "hidden";
    }
    else if (themeClass === "theme-3") {
        third.checked = true;

        first.style.visibility = "hidden";
        second.style.visibility = "hidden";
    }
}