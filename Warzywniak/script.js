<!--font_size_changer-->

let plus = document.getElementById("plus");
let plusClicker = function () {
    let ul = document.querySelectorAll("ul.fs");
    for (let i = 0; i < ul.length; i++) {
        let currentFontSize = ul[i].style.fontSize;
        console.log(currentFontSize + "px");
        if (currentFontSize === "") {
            ul[i].style.fontSize = "25px";
        } else {
            let f = parseInt(currentFontSize) + 5;
            ul[i].style.fontSize = f + "px";
        }
    }
};
plus.addEventListener("click", plusClicker);

let minus = document.getElementById("minus");
let minusClicker = function () {
    let ul = document.querySelectorAll("ul.fs");
    for (let i = 0; i < ul.length; i++) {
        let currentFontSize = ul[i].style.fontSize;
        if (currentFontSize === "") {
            ul[i].style.fontSize = "15px";
        } else {
            let f = parseInt(currentFontSize) - 5;
            ul[i].style.fontSize = f + "px";
        }
    }
};
minus.addEventListener("click", minusClicker);



