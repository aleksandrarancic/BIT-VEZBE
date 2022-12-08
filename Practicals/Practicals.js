// //1 Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
function CheekfiveDigits(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "0" ||
            str[i] === "1" ||
            str[i] === "2" ||
            str[i] === "3" ||
            str[i] === "4" ||
            str[i] === "5" ||
            str[i] === "6" ||
            str[i] === "7" ||
            str[i] === "8" ||
            str[i] === "9" 
        counter++
    }
}
if (counter === 5) {
    return true;
} else {
    return false;
}
console.log(check5Digits("1b8955abd"));


//2
// Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replaceJS(str) {
    var newStr = str.replace(/JS/g, "**");
    return newStr;
}
console.log(replaceJS("Programming in JS is super interesting!"));

//   //3
//   Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”
function insertString(str, pos, char) {
    var newString = str.slice(0, pos - 1) + char + str.slice(pos - 1);
    return newString;
}
console.log(insertString("Goo morning", 4, "d"));

//4
// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
function deleteString(str, pos) {
    var newString = str.slice(0, pos) + str.slice(pos + 1);
    return newString;

}
console.log(deleteString("Goodd morning!", 3));

//5
// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
function deleteSecond(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}
console.log(deleteSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//6
// Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function replaceWithDouble(arr, pos1, pos2) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= pos1 && i <= pos2) {
            result[i] = arr[i] * 2
        } else {
            result[i] = arr[i]
        }
    }
    return result;
}
console.log(replaceWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

//7
// Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function checkIfContainer(arr1, arr2) {
    // sort arr1,arr2
    var arr1Sorted = arr1.sort(function (a, b) {
        return a - b;
    })
    var arr2Sorted = arr2.sort(function (a, b) {
        return a - b;
    })
    //   uporedi arr1 i arr2   samo do duzine arr1
    for (var j = 0; j < arr1Sorted.length; j++) {
        if (arr1Sorted[j] !== arr2Sorted[i]) {
            return false;
        }

    }
    return true;
}
console.log(checkIfContainer([3, 4, 1, 3],[8, 9, 3, 1, 11, 4, 3]));









