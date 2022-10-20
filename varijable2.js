//2
var a;
var a = 4;
var b;
var b= 2;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);

//1
var a = 6;
var b = 8;
var c = 6;
if(a > b+c && b > c+a && c > a+b ){
    console.log("trougao je ravan")
}
else if(a == b && b == c && c == a){
    console.log("trougao je jednakostranican")
    
}
else if(a==b )


//3
var bodovi= 91;
var ocenaA= "A";
var ocenaB= "B";
var ocenaC= "C";
var ocenaD= "D";
var ocenaE= "E";

if(bodovi>91 && 100<bodovi){
    console.log("ocenaA")
}else if(bodovi>=81 && 90<=bodovi){
    console.log("ocenaB")
}else if(bodovi>=71 && 70<=bodovi){
    console.log("ocenaC")
}else if(bodovi>=61 && 60<=bodovi){
    console.log("ocenaD")
}else if(bodovi>=51 && 50<=bodovi){
    console.log("ocenaE")
}else{
    console.log("pali ste")
};

//4
var a = 4;
var b= "macka";
if(b==="pas"){
    if(a===1){
        console.log(a+ "pas")
    }else{
        console.log(a+ "pasa")
    }
}else if (b=== "macka"){
    if(a===1){
        console.log(a+ "macka")
    }
    else{console.log(a+ "macke")
}
}

//5
var godine=11;
var razlika=18- godine;
if(godine>=18){
    console.log("dovoljno sam stara da vozim
    ")
