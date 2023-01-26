// var obj = {};
// Object.defineProperty(obj, 'name',{value: 'Leonardo', writable: true, enumerable:false});
// console.log(obj.name);

// 1//
// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -> 54321

function reverseNumber(num){
    var el = num + " ";
    return Number(el.split("").reverse().join(""));
}
var reverse = reverseNumber(12345);
console.log(reverseNumber(12345));
console.log(typeof reverse);

// //2
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”

function alphabetical(str){
    var small = str.toLowerCase();
    var ar = small.split('');
    var sorted = ar.sort();
    return sorted.join('');
}

console.log(alphabetical("Webmaster"));

//3 
// Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;

function alphabetize(str) {
    var newString = "";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      var sor = arr[i].split("").sort().join("");
      newString += sor + " ";
    }
    return newString;
  }
  
  console.log(alphabetize("Republic Of Serbia"));

  //4
//   Write a function to split a string and convert it into an array of words.
// "John Snow" -> ['john', 'snow']

function split_aString(str) {
    return str.split(' ')
}

console.log(split_aString('John Snow'))

// //5
// Write a function to convert a string to its abbreviated form.
// John Snow; -> John S;

abbrev_name = function (str1) {
    var split_names = str1.trim().split(' ');
    if (split_names.length > 1) {
        return (split_names[0] + ' ' + split_names[1].charAt(0) + '.');
    }
    return split_names[0];
};
console.log(abbrev_name('John Snow'));

// // //6
// // Write a function that adds string to the left or right of string, by replacing it’s characters.
// '0000', '123', '1'-> '0123'
// '00000000', '123', 'r' -> '12300000'
