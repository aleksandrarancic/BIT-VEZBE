var n= 10;
n *=4;
console.log(n);

var a =[2,3,"abc", 11,-7];
console.log(a[a.length-1]);

var x;
console.log(x);

console.log([2,3,4] == [2,3,4])

console.log("good morning");

var x = 10;
var y = 5;
console.log(x + "y = " + x+y);

var input = 0xA41;
console.log(typeof input);

var a = 10, b=5;
var result = a || b++;
console.log(a,b);

var array = ['abcd', 'ef', 'ghi', 'jkl'];
console.log(array[2]);

console.log(2e2+1);

var a = 12;
var result = 2;
if(a > 10){
    result = result + 2;
}else{
    result = result -2;
}
    console.log(result);


console.log(10* 'Abc');
console.log(2 < 3 +5 );

var x = [1,8,9,9,2]
console.log(x[13]);
console.log(typeof 2 + 3);
console.log(typeof 1);

var array = ['s','c','r','i','p','t'];
array.length = 0;
console.log(array);

var x = 1, y = 3, z = 8;
x = y = z = 8 
console.log(x,y,z);

console.log("312" === 312);

console.log( 2 < 3 < 1);

var a = 4, b = 3;
if(a = b){
    console.log('the number are equale');
    {
        else
    }
    console.log('nope, they arent');
}


var x = 10;
var y = 5;
console.log(x + "y = ") + (x + y );


console.log(2> 10? 'two' : 5 > 3 ? 'five' : 'three');


function selection(a, b, c ){
    if(a > b && a > c ){
        return a;

    }
    if ( b > a && b > c){
        return b;
    }
    if (c > a && c > b){
        return c;
    }
}
var result;
result = selection(4, 5, 2);
console.log(result);


var n = 10;
console.log(++n);


function mul(a, b){
    var result;
    result = a * b;
    return result;
}
var product;
product = mul(4);
console.log(product);

for (var i = 0; i < 5;){
    console.log('*');
}

var numbers = [4, 5, 12, 9];
crossOriginIsolated.log(numbers.length);