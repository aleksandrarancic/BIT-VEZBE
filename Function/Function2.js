// //1
// Write a function to check whether the `input` is a string or not.
function isString(input) {
    if(typeof input === "string"){
        return true;
    }
    else{
        return false;
    }
}
console.log(isString(2));

//2
// Write a function to check whether a string is blank or not.
function isBlank(input){
    if (typeof input === "string" && input.length === 0){
        return true;
    }
else{
    return false;
}
}
console.log(isBlank (""));

// //3
// Write a function that concatenates a given string n times (default is 1).
function repeat(str, count){
    if(typeof count == "undefind"){
        count = 1;
    }
    if (count < 1){
        return "";
    }
    var res = "";
    for (var i = 0; i < count; i++){
        res += str;
    }
    return res;
}
console.log(repeat("ha"));
console.log(repeat("ha", 4));

// //4
// Write a function to count the number of letter occurrences in a string.
function countOcurances (str, letter){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        var element = str[i];
        if (element === letter){
            count ++;
        }
    }
    return count;
}
var occ = countOcurances("my random string", "n");
console.log(occ);

//5
// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.
function positionOfFirst(inputString, character){
    for (var index = 0; index < inputString.length; index++){
        var currentCharacter = inputString[index];
        if (currentCharacter === character){
            return index + 1;
        }
    }
    return -1;
}
var characterFirstPosition = positionOfFirst("this is input string", "k");
console.log(characterFirstPosition);

//6
// Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
function positionOflast(inputString, character){
    var lastIndex = inputString.length - 1;
    for ( var index = lastIndex; index >=0; index--){
        var currentCharacter = inputString[index];
        if(currentCharacter===character){
        return index +1;
        }
    }
    return -1;
}
var characterFirstPosition = positionOflast ("This is input string", "i");
console.log(characterFirstPosition);

//7
// Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
function stringIntoArray(inputString){
    var space = ""
    var outputArray = [];
    for (var index = 0; index < inputString.length; index++){
        var element = inputString[index];
        if (element === space){
            outputArray[index] = null;

        }
        else {
            outputArray[index] = element;
        }

    }
    return outputArray;

    }
    var output = stringIntoArray ("this is simple string");
    console.log(output);

//     //8
// Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrimeNumber(num){
    if (num === 1){
        return false;
    }
    else if (num === 2){
        return true;
    }
    for (var x = 2; x < num; x++){
        if (num % x === 0){
            return false;
        }
    }
    return true;
}
var isPrime = isPrimeNumber(37);
 console.log(isPrime);

