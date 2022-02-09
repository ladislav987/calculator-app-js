const themeButton = document.getElementById("themeBtn");
const body = document.getElementById("body");

var themeClass = window.localStorage.getItem("theme") || window.localStorage.setItem("theme", "theme-1");



if (document.getElementById("body").className == "") {
    if (themeClass == undefined) {
        body.classList.add("theme-1");
    }
    else body.classList.add(themeClass);
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
    }
    else if (themeClass === "theme-2") {
        themeSet= "theme-3";
    }
    else if (themeClass === "theme-3") {
        themeSet= "theme-1";
    }


    window.localStorage.setItem("theme", themeSet);
    themeClass = window.localStorage;
    body.classList.remove(bodyOldClass);
    body.classList.add(themeSet);

}