///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reverse a String
console.log('REVERSE STRING');

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("co za piękny dzień"));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Factorialize a Number
console.log('FACTORIALIZE A NUMBER');

function factorialize(num) {
    let x = 1   ;
    for (let i = 1; i <= num; i++) {
        x = x * i;
    };
    return num = x;
};
console.log(factorialize(10));






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this context
console.log('THIS CONTEXT');

let car = {
    brand : 'ford',
    color : 'red',
    power : 100, //KM
    print : function () {
        let self = this;
        console.log('inside car - function print, this = ');
        console.log(this); // car
        console.log('inside car - function print, self = ');
        console.log(self); // car

        function nested () {
            console.log('inside car - function nested, this = ');
            console.log(this); // Window
            console.log(this.color); // undefined (bo wywolujemy .color na Window)
            console.log('inside car - function nested, self = ');
            console.log(self); // car
        }
        nested();
    }
};
car.print();



function Apple (type) {
    let self = this;
    this.type = type;
    this.color = "red";
    this.getInfo = function() {

        function nested() {
            console.log("inside Apple - nested this: " + this); //window
            console.log("inside Apple - nested self: " + self); //apple
        }
        nested();

        return self.color + ' ' + this.type + ' apple';
    };
}

let apple = new Apple("champion");
apple.getInfo();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find the Longest Word in a String
console.log('Find the Longest Word in a String'.toUpperCase());

function findLongestWordLength(str) {

    let arrOfWords = str
        .split(' ')
        .sort((a, b) => {
            return a.length - b.length;
        });
    let word = arrOfWords[arrOfWords.length-1];
    console.log(word + ' is ' + word.length);

    return word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Return Largest Numbers in Arrays
console.log('Return Largest Numbers in Arrays'.toUpperCase());

function largestOfFour(arr) {

    let arrOfLargest = [];

    function compareNumbers (a, b) {
        return a - b;
    }

    arr.forEach(smallArr => {
        let orderedSmallArr = smallArr.sort(compareNumbers);
        return arrOfLargest.push(orderedSmallArr[orderedSmallArr.length-1]);
    });

    console.log(arrOfLargest);
    return arrOfLargest;



    // let arrOfLargest = [];
    // Array.prototype.maxValue = function(arr) {
    //     let max = Math.max(arr[0], arr[1], arr[2], arr[3]);
    //     return arrOfLargest.push(max);
    // };
    //
    // arr.forEach(smallArray => {
    //     smallArray.maxValue(smallArray);
    // });
    // console.log(arrOfLargest);
    // return arrOfLargest;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Confirm the Ending
console.log('Confirm the Ending'.toUpperCase());

function confirmEnding(str, target) {

    return str;
}

confirmEnding("Bastian", "n");