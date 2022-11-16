//1 
// Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

function brojanje(niz){
    var samoglasnik = 0;
    for(var i = 0; i < niz.length; i++){
        if(niz[i] == "a" || niz[i] == "e" || niz[i] == "i" || niz[i] == "o" || niz[i] == "u" ){
            samoglasnik++;
        }

    }
    return samoglasnik;
}
    var result = brojanje ("hsgdhuua");
    console.log(result);

    // //2
    // Write a function that combines two arrays by alternatingly taking elements.
    function komb(niz1, niz2){
        var res = [];
        for ( var i = 0; i < niz1.length; i++){
            res.push(niz1[i]);
            res.push(niz2[i]);
        }
        return res;
    }
var result = komb(["a", "b", "c"],[1, 2, 3]);
console.log(komb(result));

// //3
// Write a function that rotates a list by k elements.
function rotateElements(input, k){
    for( var i = 0; i < k; i++){
        var element = input[0];
        input.shift(0);
        input.push(element);

    }
    return input;
}
var niz3= [1, 2, 3, 4, 5, 6];
console.log(rotateElements(niz3, 4))

// //4
// Write a function that takes a number and returns array of its digits.
function arrayOfDigits(input){
    var niz = []
    var a ="" + input
    for ( var i = 0; i<a.length; i++){
        niz.push(a[i]);
    }
    return niz;
}
console.log(arrayOfDigits(1234));
console.log(arrayOfDigits(74658));
console.log(arrayOfDigits(1));

// //5
// Write a program that prints a multiplication table for numbers up to 12.
function multificationTable(input){
    for(var i = 1; i<= input; i++){
        var red = "";
        for(var j = 1; j<= input; j++);

    }
    console.log(multificationTable(12));
}

// //6
// Write a function to input temperature in Centigrade and convert to Fahrenheit.
function celzijus(input){
    var a= input *1.8 + 32;
    return a;
}
console.log(celzijus (45));
console.log(celzijus(21));
console.log(celzijus(0));

//7
// Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.
function maxElementInArray(input) {
    let maximum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != NaN && input[i] != undefined && input[i] != Infinity && input[i] > maximum) {
            maximum = input[i];
        }
    }
    return maximum;
}

var a = [1, 15, -25, 0, NaN, undefined, Infinity, 10];
console.log(maxElementInArray(a));

// //8
// Write a function to find the maximum and minimum elements. Function returns an array.
function maxMinimumElementsInArray(input) {
    let maximum = input[0];
    let minimum = input[0];
    a = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > maximum) {
            maximum = input[i];
        } else if (input[i] < minimum) {
            minimum = input[i];
        }
    }
    a.push(minimum);
    a.push(maximum);
    return a
}

var n = [1, 15, -25, 0, 32, -10, 10];
console.log(maxMinimumElementsInArray(n))

// //9
// Write a function to find the median element of array.
function medianElement(input) {
    let medianElm;
    if (input.length % 2 == 0) {
        let x = input.length / 2;
        medianElm = (input[x-1] + input[x]) / 2;
        return medianElm;
    } else {
        let y = parseInt(input.length / 2);
        medianElm = input[y];
        return medianElm;
    }
}

var n = [1, 15, -25, 7, 32, -10, 10];
console.log(medianElement(n));

// //10
// Write a function to find the element that occurs most frequently.
function mostFrequently(input) {
    var mf = 1;
    var m = 0;
    var item;
    for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                    if (input[i] == input[j]) {
                        m++;
                    }
                    if (mf < m) {
                      mf = m; 
                      item = input[i];
                    }
            }
            m = 0;
    }
    return console.log(item + " - " + mf + " times") ;
}
  
consol.log(mostFrequently(['pear', 'apple', 'orange', 'apple']));
consol.log(mostFrequently([1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3]));

//11
// 11. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.
function firstMiddleLast(input) {
    if (input.length == 0) {
        return console.log(input);
    } else if (input.length % 2 == 0) {
        return (
            console.log('First elemet - ' + input[0] + '\nLast element - ' + input[input.length-1])
        )
    } else {
        return (
            console.log('First elemet - ' + input[0] + '\nMiddle element - ' + input[parseInt(input.length/2)] + '\nLast element - ' + input[input.length-1])
        )
    }
}

firstMiddleLast(['pear', 'apple', 'orange', 'apple'])
firstMiddleLast([1, 2, 2, 3, 4, 5, 3])
firstMiddleLast([])

//12
// Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.
function average() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    let n = arguments.length;
    return (sum / n);
  }

console.log(average(1, 2, 3, 4));
console.log(average(3, 5, 8, 14, 20));

//13
//Write a function to find all the numbers greater than the average.
function average() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    let n = arguments.length;
    console.log('Prosek : ', sum/n);
    return (sum / n);
  }

  function greaterThanAverage() {
    let a = average(...arguments);
    for (let j = 0; j < arguments.length; j++) {
        if (arguments[j] > a) {
            console.log(arguments[j]);
        }
      }
    }

greaterThanAverage(1, 2, 3, 4, 7, 10);

