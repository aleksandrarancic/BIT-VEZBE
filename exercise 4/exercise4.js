// //1 // //1
// Write a program that checks if a given element e is in the array a.
//     Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
var e = 3;

function checkElement() {

    for (var i = 0; i < arguments.lenght; i++) {
        if (arguments[i] == e) {
            return "yes";
        }
    }
    return "no";
    var rez = chekNumber(5, -4.2, 2, 7);
    console.log(rez);
}


// //2 Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiNumber(){
    var noviNiz = [];
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] > 0){
            noviNiz.push(arguments[i] *=2);
        }
        else{
            noviNiz.push(arguments[i]);
        }
    }
    return noviNiz;
}
var rez = multiNumber (-3, 22, 10, 6.8, -8);
console.log(rez);

// //3 Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function miniNumber() {
    var min = 0;
    var index = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            min = arguments[i];
            index = i;
        }
    }
    return console.log(min, index);
}
var rez = miniNumber(4, 2, 2, -1, 6);

// //4 Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
function secondMin(array){
    min = array[0];
    sec = array[0];
    for (var i = 0; i < array.lenght; i++){
        if (array[i] < min){
            min = array[i];
        }
        for (var j = 0; j < array.lenght; j++){
            if(array[j]> min && array[j] < array[i] ){
                sec = array[j];
            }
        }
    }
    return sec;
}
console.log (secondMin([4, 2, 2, -1, 6]))

// //5 Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
function sumPositive(array){
    var sum = 0;
    for (var i = 0; i < array.lenght; i++){
        if (array[i]> 0){
            sum+=array[i];
        }
    }
    return sum;
}
console.log (sumPositive(array));
