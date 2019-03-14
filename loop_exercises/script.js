<!--wypisz liczby od 1 do 100-->
console.log('wypisz liczby od 1 do 100'.toUpperCase())
let i = 1;
while (i < 101){
    console.log("i: " + i);
    i++
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby od 8 do 50-->

let j = 8;
while (j >= 8, j < 51){
    console.log("j: " + j);
    j++
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby parzyste od 2 to 50-->

let k = 2;
while (k >= 2, k <= 50){
    console.log("k: " + k);
    k = k + 2;
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby od 100 do 1-->

let l = 100;
while (l <= 100, l > 0){
    console.log("l: " + l);
    l--;
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby podzielne przez 8 ( w zakresie 1..100)-->

let m = 1;
while (m >= 1, m <= 100){
    if (m % 8 === 0){
        console.log("m: " + m);
    }
    m++;
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby podzielne przez 3 lub 5 ( w zakresie 1..100)-->

let n = 1;
while (n >=1, n <=100){
    if (n % 3 === 0 || n % 5 === 0){
        console.log("n: " + n);
    }
    n++
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz liczby podzielne przez 3 albo 5 ( w zakresie 1..100) (nie wypisuj tych podzielnych jednocześnie przez 3 i 5)-->

let o = 1;
while (o <= 1, o <= 100) {
    if (o % 3 === 0 || o % 5 === 0) {
        if (o % 15 !== 0) {
            console.log("o: " + o);
        }
    }
    o++;
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--wypisz największą liczbę niepodzielną przez 2,3,5,7 ale mniejszą od 1000-->


for (let p = 1000; p <= 1000, p >= 0; p--) {

    if (p % 2 !== 0 && p % 3 !== 0 && p % 5 !== 0 && p % 7 !== 0) {
        console.log("p: " + p);
        break;
    }
}


<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
<!--sprawdź czy podana jako parametr liczba jest parzysta-->

let prompt = require('prompt-sync')();
let r = prompt("Podaj liczbę, żeby sprawdzić czy jest parzysta");

if (r % 2 === 0) {
    console.log("To liczba parzysta!");
} else if (r % 2 !== 0) {
    console.log("To nie jest liczba parzysta.")
}

