var result='';
var a= ['A', 'b', 'C', true, NaN, undefined, null, 1];
for(i =0; i<a.length; i++){
result=result+',' + a[i];
}
console.log(result);