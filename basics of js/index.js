// io bound task

const fs = require("fs");
const contents = fs.readFileSync("a.txt" ,"utf-8"); //synchronous
console.log(contents);

// function add(a,b){
//     return a+b ;
// }
// function subtract(a,b){
//     return a-b ;

// }
// function multiply(a,b){
//     return a*b ;    
// }
// function divide(a,b){
//     return a/b;
// }

// function dosomething(a , b , op ){
//     return op(a,b);
// }

// console.log(dosomething(1 , 2 , divide));
