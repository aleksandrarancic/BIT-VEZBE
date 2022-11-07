// //1
// Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
function convertString(input){
    b = [];
    for (i = 0; i < input.length; i++){
        if ( Number(input[i]) && Number(input[i]) != infinity){
            b.push(Number(input[i]));
        }
    }
    return b;
}
var a = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(convertString(a));


// //2
// Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
function joinElements(array){
    var b ="";
    for (i = 0; i < input.length; i++){
        if (array[i] == 0 || input [i]== false || Number(array[i])){
            b += array[i];
        }
    }
    return b;

}
var a = [Nan, 0, 15, false, -22, "", undefined, 47, null];
console.log(joinElements(a)); 

// //3
// Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: [15, -22, 47]
function filterFalsyValues(input){
    b=[];
    for (i=0; i<input.length; i++){
        if(Number(input[i])){
            b.push(input[i]);
        }
    }
    return b;
}
var a = [Nan, 0, 15, false, -22, "", undefined, 47, null];
console.log(filterFalsyValues(a));

// //4
// Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 3

function calculateNumberofIntegers(input){
    var n = 0;
    for (i = 0; i<input.length; i++){
        if (input[i] == parseInt(input [i])){
            n++;
        }
    }
    return n;
}
var a =[NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
console.log(calculateNumberofIntegers(a));

//5
// Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5,"", 4, 7, null]
// Output: 2
function calculateNumber(input){
    var n= 0;
    for (i = 0; i< input.length; i++){
        if(Number(input[i]) === input[i] && input[i]%1 !=0){
            n++;
        }
    }
    return n;
}
var a = [NaN, 23.1, 15, false, -22.5,"", 4, 7, null];
console.log(calculateNumber (a));


