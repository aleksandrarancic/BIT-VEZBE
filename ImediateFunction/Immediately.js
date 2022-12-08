1 // Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var niz = [4,5,11,9];
(
    function(inputArray){
        var a = inputArray.length;
        var b = inputArray[0];
        inputArray[0] = inputArray[a-1];
        inputArray[a-1] = b 
        console.log(inputArray);
    }

)(niz);

// 2// Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
(function(a,b){
    var surface = a * b;
    console.log("surface area of the given rectangle with sides " + a + " and " + b + " is " + surface  )



})(4,5);


// //3 Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
(
    function(input){
        var str = '';
        var numberOfAppearance = 0;
        for (var i = 0; i < input.length; i++){
        if(input[i] = 'm' || input[i] == 'M'){
            str += '*'
            numberOfAppearance ++
    }else{
        str += input [i];
    }
        }
        console.log(str, numberOfAppearance);



//4
var x = (
    function (name, surname) {
        return function (name, surname) {
            console.log(`${name}.${surname}@gmail.com`);
            return true;
        }
    }
)();
console.log(x('pera','peric'));

//5
var x = (
    function (octal) {
        return function (octal) {
            console.log(octal); // octal pretvara octal vo decimalni broj
            return true;
        }
    }
)();
console.log(x(034));
console.log(x(043));

//6
function successCallback() {
    return console.log('Your password is cool!');
}

function errorCallback() {
    return console.log('Your password is invalid!')
}

function checkPassword (password, successCallback, errorCallback) {
    if (password.length < 6) {
        console.log("Too short");
        errorCallback();
        return false;
    }
    
    if (!/[0-9]/.test(password)) {
        console.log("Should contain at least one digit");
        errorCallback();
        return false;
    } else {
        successCallback();
        return true;
    }
}

console.log(checkPassword('JSGu', successCallback, errorCallback));
console.log(checkPassword('JSGuru', successCallback, errorCallback));
console.log(checkPassword('JSGuru123', successCallback, errorCallback));
//7
function oddNumber(element) {
    if (element % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

function filterArray(input, oddNumber) {
    var result = [];
    for (i = 0; i < input.length; i++) {
        if (oddNumber(input[i])) {
            result.push(input[i]);
        }
    }
    return result;
}

var niz = [2, 8, 11, 4, 9, 3];
console.log(filterArray(niz, oddNumber));
