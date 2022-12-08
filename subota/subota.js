for (var i = 0; i < 5;){
    console.log('*');
}

var numbers = [4, 5, 12, 9];
console.log(numbers.length);

var result;
var n;
n= 4;

switch (n) {
case 2:
result = 1;
break;
case 4:
result = 2;
case 6:
result = 3;
break;
default:
result = 100;
}
console. log(result);

//1
var a = 10;
var b = 12;
var tmp;
temp = a;
a=b;
b = temp;
console.log(a,b);

//2
function f(a,b){
    return 1 + a + b;
}
var result = f(4, 5, 32, 11);
console.log(result);

//3
var a = [2, 3, 11, 5, 23, 24];
a.length = 2;
console.log(a);

//4
for(var i = 0; i < 10; i +=2){
    console.log(i);
}

//5
function f(a, b){
    return a + b;
}
console.log(f(12));

//6
for(var i = 3; i >=0; i--){
    console.log(i);
}

//7
var s = 'abc';
console.log(s + s);

//8
var s = 'ab34abc';
console.log(parseInt(s));

//9
console.log(2 + true);

//10
function f(a, b){
    return a + b;
}
var result;
result = f(4, 5);

//11
var isBlue = true;
var isSolid = false;
console.log(isBlue && isSolid);

//12
var a = [2, 3, 11];
a.length = 5;
console.log(a);

//13
var n = 23;
n -= 2;
console.log(n);

//14
var s = 'coffee';
s[0] = 'C';
console.log(s);

//15
var sum = 0;
for (var i = 0; i < 10; i++){
    if (i % 3 == 0){
        sum++;
    }
    if (i == 8){
        break;
    }
}
console.log(sum);


