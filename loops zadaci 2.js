//1
var a = [5, -4.2, 3, 7];
var e =3;

for(num in a){
    if(a[num]==e ){
        console.log("yes");
    }
}






//2
var listNum = [-3, 11, 5, 3.4, -8];
var newList = [];

for (num in ListNum){
    newList.push(listNum[num] *2)
}
console.log(newList);



//3
var mArray = [4, 2, 2, -1, 6];
var min = mArray[0];
for(var i = 0; i < mArray.length; i++){
    if (mArray[i] < min){
        min=mArray[i];
    }
}
console.log(min);

