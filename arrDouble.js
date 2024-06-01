//1. Return double of each element present in an array using callback
let arr = [2,3,4,5]
function doubleArray(arr, fun1){
   return arr.map(fun1)
}
function fun1(x){
   return x*2
}

let ans = doubleArray(arr,fun1);
console.log(ans)