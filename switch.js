//1
switch (a) {
    case 1:
        result = "ponedeljak";
        break;
    case 2:
        result = "utorak";
        break;
    case 3:
        result = "sreda";
        break;
    case 4:
        result = "cetvrtak";
        break;
    case 5:
        result = "petak";
        break;
    case 6:
        result = "subota";
        break;
    case 7:
        result = "nedelja";
        break;
    default:
        result = "input must be ponedeljak";
        break;
}
console.log(result);

//3
var a = 7;
switch (a) {
    case 1:
        result = "it/s a weekday";
        break;
    case 2:
        result = "it/s a weekday";
        break;
    case 3:
        result = "it/s a weekday";
        break;
    case 4:
        result = "it/s a weekday";
        break;
    case 5:
        result = "it/s a weekday";
        break;
    case 6:
        result = "it/s a weekend";
        break;
    case 7:
        result = "it/s a weekend";
        break;
    default:
        result = "input must be a number between 1 and 7";
}
console.log(result);

//4
var a = 1;
switch (a) {
    case 1:
        result = "januar";
        break;
    case 2:
        result = "februar";
        break;
    case 3:
        result = "mart";
        break;
    case 4:
        result = "april";
        break;
    case 5:
        result = "maj";
        break;
    case 6:
        result = "jun";
        break;
    case 7:
        result = "jul";
        break;
    case 8:
        result = "avgust";
        break;
    case 9:
        result = "septembar";
        break;
    case 10:
        result = "oktobar";
        break;
    case 11:
        result = "novembar";
        break;
    case 12:
        result = "decembar";
        break;

    default:
        result = "mora da bude broj izmedju 1 i 12";
}
console.log(result);

//6
var ocene = "A"
var result = ""
switch (ocene) {
    case "A":
        result = "good job";
        break;
    case "B":
        result = "preety good";
        break;
    case "C":
        result = "not so good";
        break;
    case "F":
        result = "faild";
        break;
    default:
        result = "unknown grade";
        break;
}
console.log(result);

//7
var a = "Nis";
var result = "";
switch (a) {
    case "Rome":
    case "Milano":
    case "Turin":
    case "Venezia":
    case "Trieste":
        result = "Italy";
        break;
    case "Paris":
    case "Nice":
    case "Colamr":
    case "Lion":
        result = "France";
        break;
    case "Nis":
    case "Kragujevac":
    case "Krusevac":
        result = "Serbia";
        break;
    case "Ljubljana":
    case "Maribor":
        result = "Slovenia";
        break;
    case "Zagreb":
        result = "Croatia";
        break;
}
console.log(result);

//8
var a = 3;
var b = 0;
var c = "+";
var result = "";
switch (c) {
    case " + ":
        result = a + b;
        break;
    case " - ":
        result = a - b;
        break;
    case " / ":
        if (b == 0) {
            result = " nije deljivo sa nulom ";
        }
        else {
            result = a / b;
        }
        break;
    case " * ":
        result = a * b;
        break;
    default:
        result = "nije deljivo sa nulom";
        break;
}
console.log(result);

//5
var meseci = 7;
var result = "";
switch (meseci) {
    case 1:
    case 2:
    case 12:
        result = "winter";
        break;
    case 3:
    case 4:
    case 5:
        result = "spring";
        break;
    case 6:
    case 7:
    case 8:
        result = "summer";
        break;
    case 9:
    case 10:
    case 11:
        result = "autumn";
        break;
    default:
        result = "input must be a number between 0 and 12"
        break;
}
console.log(result);



