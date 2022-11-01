//1 Write a program that calculates the maximum of two given numbers.
var veci;
function max(a, b){
    if (a == b){
        console.log("brojevi su isti");
    }
    else if (a > b){
        veci = a;

    }
    else {
        veci = b;
    }
    return veci;
}
console.log(max(3,6));



//2 Write a program that checks if a given number is odd.
var paran;
function isOdd(a){
    if (a % 2 == 0){
        paran = "broj je paran";
    } else {
 paran = "broj je neparan";
    
}
return paran;
}

//3 Write a program that checks if a given number is a three digit long number.
var isthreedigit;
function threeDigit(a){
    if (a > 99 && a < 1000 ){
        isThreeDigit = "broj ima 3 cifre";
    }
    else{
        isThreeDigit = "broj nije trocifren"
    }
    return isThreeDigit;
}
console.log(threeDigit(165));

//4 Write a program that calculates an arithmetic mean of four numbers.
var prosek;
function average(a, b, c, d){
    prosek = (a + b + c + d)/4;
    return prosek;
}
console.log((average(1, 2, 3, 4)));

//5 Write a program that draws a square of a given size. For example, if the size of square...
function drawASqure(a) {
    console.log("*****");
    for (i = 1; i < a -1; i++) {
        console.log("*   *");
    }
    console.log("*****");
}
drawASqure(2);

//6 Write a program that draws a horizontal chart representing three given values. For....
var strA ="";
var strB ="";
var strC ="";
function drawHorChart(a, b, c){
    for (i = 0; i < a; i++){
        strA +="*";
    }
    console.log(strA);
    for (y = 0; y < b; y++){
        strB +="*";
 }
 console.log(strB);
 for (z = 0; z < c; z++){
    strC +="*";
 }
 console.log(strC);
}
drawHorChart(3, 2, 5);

//7 Write a program that calculates a number of digits of a given number.
function numberOfDigits(a){
    var aString = "" + a;
    console.log("broj cifara u broju " + a + " je :", aString.length);
}
numberOfDigits(25);
numberOfDigits(100);
numberOfDigits(62);
numberOfDigits(17762);

//8 Write a program that calculates a number of appearances of a given number in a given....
var niz = [2, 4, 7, 8, 7, 7, 1];
var broj = 7;
function numberOfAppearance (a, params){
    for (i= 0; i < params.length; i++){
        if(params[i]== a){
            console.log(niz);
            console.log("broj" + a + "je na poziciji ", i+1);
            return;
        }
    }
    console.log(niz);
    console.log("broj" + a + "nije u nizu");
}
numberOfAppearance(broj, niz);

//9 Write a program that calculates the sum of odd elements of a given array.
var niz = [2, 4, 7, 8, 7, 7, 1,5];
function sumOfOdd(params){
    var suma = 0;
    for (i = 1; i < params.length; i++){
        if (params [i] % 2 !=0){
            suma += params[i];
        }
    }
    return suma;
}
console.log(sumOfOdd(niz));

//10 Write a program that calculates the number of appearances of a letter a in a given string....Modify the program so it calculates the number of both letters a and A.
var str = "blablabla";
function numberOfAppearance(rec){
    var brojprikaza = 0;
    var brojprikazaA = 0;
    for (i= 0; i < rec.length; i++){
        if(rec[i] == "a"){
            brojprikaza += 1;
        }
        else if (rec[i] == "A"){
            brojprikazaA +=1;
        }
    }
    console.log(rec);
    console.log("slovo a se pojavljuje " + brojprikaza + "puta.");
    console.log("slovo A se pojavljuje " + brojprikazaA + "puta.");
}
numberOfAppearance(str);
console.log();  // prazan red
numberOfAppearance("jjajakjajajka");
console.log();  // prazan red
numberOfAppearance("ajkulalalala");

//11 Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
var str11 = "abc";
var num = 5;
function concatenateString(a, rec){
    var concRec= "";
    for (i=0; i < a; i++){
        concRec +=rec;

    }
    console.log(concRec);
}
concatenateString (num, str11);
console.log(); // prazan red
concatenateString (10, "la");
console.log(); // prazan red
concatenateString (5, "xo");











