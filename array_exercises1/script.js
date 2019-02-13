////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Usuń duplikaty z tablicy 'data'

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// a) z użyciem Set
let nonDuplicates = [...new Set(data)];
console.log("1 a) z użyciem Set : ");
console.log(nonDuplicates);


// b) z użyciem forEach
let nonDuplicates2 = [];
data.forEach(elem2 => {
    if (nonDuplicates2.indexOf(elem2) === -1) {
        nonDuplicates2.push(elem2);
    }
});
console.log("1 b) z użyciem forEach : ");
console.log(nonDuplicates2);


// c) z użyciem Reduce
let nonDuplicates3 = data.reduce(function (nonDuplicates3, elem3) {
    if (nonDuplicates3.indexOf(elem3) === -1) {
        nonDuplicates3.push(elem3);
    }
    return nonDuplicates3;
}, []);
console.log("1 c) z użyciem Reduce : ");
console.log(nonDuplicates3);


const arr = [1, 1, 2, 2, 3, 4];
const newArr = [];
arr.filter(el => {
    if (newArr.indexOf(el) === -1) {
        newArr.push(el);
    }
});

console.log(newArr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2) uzyskaj taki efekt : [1, 2, 3].duplicate();  -> [1, 2, 3, 1, 2, 3]

// a)
const numeric = [1, 2, 3];
let arrWithDuplicates = numeric.concat(numeric);
console.log("2 a)");
console.log(arrWithDuplicates);


// b)
let myArr = {
    duplicate : function(arr) {
        return arr.concat(arr);
    }
};
console.log("2 b)");
console.log(myArr.duplicate([1, 2, 3]));


// c)
Array.prototype.duplicate = function () {
    return this.concat(this);
};
console.log("2 c)");
console.log([1, 2, 3].duplicate());


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3) Zadeklaruj tablicę tab z 5 tekstami. Wypisz w konsoli tą tablicę i jej długość.

let tab = ["jeden", "dwa", "trzy", "cztery", "piec"];
console.log('3) : ' + tab + "lenght: " + tab.length);


// 4) Robiąc pętlę po tablicy z pierwszego zadania wypisz każdy element oraz jego długość.

// a)
function showLength (tabElement) {
    console.log('4 a) : ' + tabElement + ' have length: ' + tabElement.length);
}
tab.forEach(showLength);


// b)
tab.forEach(function(el){
    console.log('4 b) : ' + el + " have length: " + el.length);
});


// c)
for (let i = 0 ; i < tab.length ; i++) {
    console.log('4 c) : ' + tab[i] + " have length: " + tab[i].length);
}


// d)
for (const el of tab){
    console.log('4 d) : ' + el + " have length: " + el.length);
}


// 5) Do tabeli 'tab' dodaj na końcu i początku po 1 nowym elemencie.

tab.push("szesc");
tab.unshift("zero");
console.log("5) : ");
console.log(tab);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6) Stwórz tablicę 10 losowych absolutnych liczb z przedziału 1-10.

const arrX = [];
for (let i = 0 ; i < 10 ; i++) {
    arrX.push(Math.floor(Math.random() * 10) + 1);
}
console.log('6) : losowe liczby 1-10');
console.log(arrX);


// 7) wypisz w konsoli największy i najmniejszy element arrX :

arrX.sort((a, b) => a-b);

console.log('7) : największy i najmniejszy element powyższej losowej tablicy');
console.log(arrX[0]);
console.log(arrX[arrX.length -1]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8) Wypisz w konsoli użytkowników, którzy są pełnoletni.

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
];

const usersUp18 = tabUsers.filter(el => el.age >= 18);
console.log('8) : pełnoletni:');
console.log(usersUp18);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9) Napisz funkcję, która wyświetli wynik tak jak poniżej:
// true, false, true, false,
// true, false, true, false

let cd = [1, 0, 1, 0, 1, 0, 1, 0];

function check (arr) {
    console.log('9) : ');
    console.log(arr.map(el => el === 1));
}
check(cd);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//



