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
        console.log('inside car - function print, this = ' + this); // car
        console.log('inside car - function print, self = ' + self); // car

        function nested () {
            console.log('inside car - function nested, this = ' + this.toString()); // Window
            // console.log(this.color); // undefined (bo wywolujemy .color na Window)
            console.log('inside car - function nested, self = ' + self); // car
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
    let match = true;
    for (let i = str.length-1, j = target.length-1; i >= j, j >= 0; i--, j--) {

            if (target[j] !== str[i]) {
                match = false;
                console.log(match);
                return match;
            }
    }
    console.log(match);
    return match;

    // or...
    // console.log(str.endsWith(target));
}

confirmEnding("Bastian", "ian");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Repeat a String
console.log('Repeat a String'.toUpperCase());

function repeatStringNumTimes(str, num) {

    if (num < 0) {
        str = "";
        return str;
    }
    let accumulatedString = "";
    for (let i = 1 ; i <= num ; i++) {
        accumulatedString = accumulatedString + str;

    }
    console.log(accumulatedString);
    return accumulatedString;


    // or...
    // if (num < 0) {
    //     str = "";
    //     return str;
    // }
    // return str.repeat(num);
}
repeatStringNumTimes("Abc", 3);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("abc", -2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Truncate a String
console.log('Truncate a String'.toUpperCase());

function truncateString(str, num) {
    let shortStr = "";
    if (str.length <= num){
        shortStr = str;
    } else {
        shortStr = str.slice(0, num) + '...';
    }

    console.log(shortStr);
    return shortStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Finders Keepers
console.log('Finders Keepers'.toUpperCase());

function findElement(arr, func) {
    let num = 0;
    for (let i = 0 ; i <= arr.length-1 ; i++) {
        num = arr[i];
        if (func(num)) {
            console.log(num);
            return num;
        }
    }
    console.log(undefined);
    return undefined;

    // or ...
    // let num = arr.find(func);
    // console.log(num);
    // return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
findElement([1, 3, 5, 9], num => num % 2 === 0);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Boo who (return 'true', if 'bool' is boolean)
console.log('Boo who'.toUpperCase());

function booWho(bool) {

     if (typeof bool === "boolean" || typeof bool === "boolean") {
         console.log(true);
         return true;
     } else {
         console.log(false);
         return false;
     }


    // or...
    // if (bool === true || bool === false) {
    //     console.log(true);
    //     return true;
    // } else {
    //     console.log(false);
    //     return false;
    // }
}

booWho(true);
booWho(false);
booWho("true");
booWho([1, 2, 3]);
booWho(null);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Title Case a Sentence
console.log(' Title Case a Sentence'.toUpperCase());

function titleCase(str) {
    let arrayOfString = str.toLowerCase().split(' ');


    let resultArray = arrayOfString.map(el => {
        return el.replace(el.charAt(0), el.charAt(0).toUpperCase())
    });
    console.log(resultArray.join(" "));


    //or...
    // let resultArray = arrayOfString.map(el => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase());
    // console.log(resultArray.join(" "));
    // return resultArray.join(" ");
}

titleCase("I'm a little tea pot");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Slice and Splice / wstaw pierwsz tablice w druga, zaczynajac od podanego indeksu. nie modyfikuj podanych tablic.
console.log('Slice and Splice'.toUpperCase());

function frankenSplice(arr1, arr2, n) {

    let localArray = arr2.slice();

    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    console.log(localArray);
    return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Falsy Bouncer /
console.log('Falsy Bouncer'.toUpperCase());

function bouncer(arr) {
    let correctArr = [];

    for (let i = 0 ; i < arr.length ; i++) {
        if (Boolean(arr[i]) === true){
            correctArr.push(arr[i]);
        }
    }
    console.log(correctArr);
    return correctArr;
}

bouncer([7, "ate", "", false, 9]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Where do I Belong
console.log('Where do I Belong'.toUpperCase());

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    });

    let numIndex = arr.indexOf(num);
    console.log(`index  ${numIndex} of ${arr}`);
    return numIndex;
}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


