// //1
// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
// 'product': "Milk"
// 'quantiti': 1,
// 'price': 1.50
// }

var groceries =[
    {
        product :'milk',
        quantiti:1,
        price: 1.50
    },
    {
        product :'chocholate',
        quantiti:1,
        price: 5
    },
    {
       product :'apple',
        quantiti:1,
        price: 2.5
    }

]
function totalPrice(groceries){
    var total = 0;
    groceries.forEach(element =>{
        total += (element.price * element.quantiti)
    });
    var result = parseFloat(total).toFixed(2);
    return Number(result);
}
console.log(totalPrice(groceries));

// //2
// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}

var jewelry = [
    {
        name:'diamond ring',
        price: 1000,
    },
{
        name:'diamond earings',
        price: 980,
},
{
        name:'',
        price: 980,
}

]
function mostExpensiv(jewelry){
    var expensiv = 0;
    var result;
    for(var i = 0; i < jewelry.length; i++){
        if(jewelry[i].price > expensiv){
            expensiv = jewelry[i].price;
        result = jewelry[i].name;
        }
       
    }
    return result;
}
console.log(mostExpensiv(jewelry));

// //3
// Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.

function  mapLetters(str){
    const map = {};
    for(let i = 0; i < str.length; i++){
       if(map.hasOwnProperty(str[i])){
          map[str[i]] = map[str[i]].concat(i);
       }else{
          map[str[i]] = [i];
       };
    };
    return map;
  };
  console.log(mapLetters("dodo"));
  console.log(mapLetters("froggy"));
  console.log(mapLetters("grapes"));

  //4
//   And who cursed the most in the fight between you and your spouse? Given an object
// with three rounds, with nested objects as your scores per round, return a string of who
// cursed the most: If you, return &quot;ME!&quot; If your spouse, return &quot;SPOUSE!&quot; If a draw, return
// &quot;DRAW!&quot;

function whoCursedMost(curse){
    var scoreMe = 0;
    var scoreSpouse = 0;
    for(var i = 0; i < curse.length; i++ ){
        scoreMe += curse[i].me;
        scoreSpouse += curse[i].me;
        scoreSpouse += curse[i].spouse;
    }
    if(scoreMe > scoreSpouse) return "Me";
    else if(scoreMe < scoreSpouse) return "Spouse"
    else return "draw";
}
console.log(whoCursedMost([
    {Me: 10, Spouse:5},
    {Me: 5, Spouse:10},
    {Me: 10, Spouse:10}
]));




