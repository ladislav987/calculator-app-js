const themeButton = document.getElementById("themeBtn");
const body = document.getElementById("body");

const prvy = document.getElementById("oneIne");
const druhy = document.getElementById("twoIne");
const treti = document.getElementById("threeIne");

var themeClass = window.localStorage.getItem("theme") || window.localStorage.setItem("theme", "theme-1");



if (document.getElementById("body").className == "") {
    if (themeClass == undefined) {
        body.classList.add("theme-1");
        prvy.checked = true;
    }
    else {
        body.classList.add(themeClass);
        radioBtnCheckSame();
    }
}


themeButton.addEventListener("click", () =>{
    themeHandler();
});


function themeHandler() {
    let themeSet;

    let bodyOldClass = document.getElementById("body").className;
    themeClass = window.localStorage.getItem("theme");

    if (themeClass === "theme-1") {
        themeSet = "theme-2";
        druhy.checked = true;
    }
    else if (themeClass === "theme-2") {
        themeSet= "theme-3";
        treti.checked = true;
    }
    else if (themeClass === "theme-3") {
        themeSet= "theme-1";
        prvy.checked = true;
    }


    window.localStorage.setItem("theme", themeSet);
    themeClass = window.localStorage;
    body.classList.remove(bodyOldClass);
    body.classList.add(themeSet);

}

function radioBtnCheckSame() {
    if (themeClass === "theme-1") {
        prvy.checked = true;
    }
    else if (themeClass === "theme-2") {
        druhy.checked = true;
    }
    else if (themeClass === "theme-3") {
        treti.checked = true;
    }
}