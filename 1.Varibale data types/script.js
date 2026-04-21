console.log("Hello World");
console.log("iam kunal");
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
// output will be 30    // data type of c is number
var d = "kunal";
console.log(typeof a , typeof d , typeof c);
// output will be number string number
var e = true;
console.log(typeof e);
// output will be boolean
var f = null;
console.log(typeof f);
// output will be object
var g;
console.log(typeof g);
// output will be undefined

 //break = 1;
 //console.log(break); //
// output will be 1 but it is not recommended to use break as variable name because it is a reserved keyword in JavaScript. It is used to break out of a loop or switch statement. Using it as a variable name can lead to confusion and errors in your code. It is best to avoid using reserved keywords as variable names.    

var a2 = "Kunal";
var a3 = "kunal";
console.log(a2 == a3);
// output will be false because JavaScript is case-sensitive, so "Kunal" and "kunal" are considered different strings. 
 const a4 = 10;
  a5 = a4 + 1;
    console.log(a5);
    

// output will be 11 because a4 is a constant variable with a value of 10, and a5 is assigned the value of a4 plus 1, which results in 11.
 //a4 = a4 + 1;
   // console.log(a4);
// output will be an error because a4 is a constant variable and cannot be reassigned a new value. Attempting to do so will result in a TypeError.
 // var 55a = "kunal ";
// output will be an error because variable names cannot start with a number. In this case, "55a" is not a valid variable name and will result in a SyntaxError. Variable names must start with a letter, underscore (_), or dollar sign ($) and can be followed by letters, numbers, underscores, or dollar signs.
 

// So in modern Javasript use let instead of var because let has block scope and var has function scope. This means that variables declared with let are only accessible within the block they are defined in, while variables declared with var are accessible throughout the entire function. Using let can help prevent unintended variable hoisting and reduce the chances of bugs in your code.
let a6 = 10;
 a6 = a6 + 1;
    console.log(a6);
// output will be 11 because a6 is declared with let, which allows it to be reassigned a new value. In this case, a6 is initially assigned the value of 10, and then it is updated to 11 by adding 1 to its current value.
// but if we use const instead of let, the output will be an error because const variables cannot be reassigned a new value. Attempting to do so will result in a TypeError. It is important to choose the appropriate variable declaration (let or const) based on whether you need to reassign the variable or not.
// let is a block scope
// var is a function scope
// const is a block scope and cannot be reassigned a new value.

{
    let a = 11;
    console.log(a);
    //output will be 11 because a is declared with let, which has block scope. This means that a is only accessible within the block it is defined in. In this case, a is defined within the block, so it can be accessed and logged to the console without any issues.
}
console.log(a);
// output will be 10 because a is declared with let inside the block, which means it is not accessible outside of that block. When we try to log a outside of the block, it will refer to the variable a that is declared in the outer scope, which has a value of 10. Therefore, the output will be 10. 


let x = " kunal bhai";
let y = 22;
let z= 3.55;
const m = true;
let q = undefined;
let r = null;

console.log(
   typeof x,typeof y ,typeof z, typeof m , typeof q ,typeof r
)
// why is typeof  "null" a object?
// This is a known bug in JavaScript where typeof null returns "object" instead of "null".
// The reason for this is that in the early days of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0, and null was represented as a null pointer, which also had a type tag of 0. As a result, typeof null returns "object" because it is treated as an object in the underlying implementation of JavaScript.
 // OBJECT : pair of key and value pairs. It is a data structure that can store multiple values in a single variable. Each value is accessed using a key, which is a string or symbol that identifies the value. Objects are used to represent real-world entities and can contain properties and methods. In JavaScript, objects are created using curly braces {} and can be assigned to variables.
//object is a non primitive data type.
 const item = {
    product : " led bulb",
    price : "150"
}
console.log(item);
// output will be { product: ' led bulb', price: '150' } because item is an object that contains two key-value pairs: "product" with the value "led bulb" and "price" with the value "150". When we log the item object to the console, it will display the contents of the object in a readable format.
 const o = {
    job : "developer",
    company : "google",
    salary : 100000,
    is_handsome : true
 }
 console.log(o);
// output will be { job: 'developer', company: 'google', salary: 100000, is_handsome: true } because o is an object that contains four key-value pairs: "job" with the value "developer", "company" with the value "google", "salary" with the value 100000, and "is_handsome" with the value true. When we log the o object to the console, it will display the contents of the object in a readable format.
 o.salary = 120000;
 console.log(o);
// output will be { job: 'developer', company: 'google', salary: 120000 } because we have updated the value of the "salary" key in the o object to 120000. When we log the o object to the console again, it will reflect the updated value of the "salary" key.    
 o.location = "bangluru";
 console.log(o);
// output will be { job: 'developer', company: 'google', salary: 120000, location: 'bangluru' } because we have added a new key-value pair to the o object with the key "location" and the value "bangluru". When we log the o object to the console again, it will reflect the new key-value pair that we added.

//Create a variable string type and add try to add number to it
 var abc = "kunal";
 var edf = 2;
 console.log(abc + edf);
 // output will be "kunal2" because when we use the + operator with a string and a number, JavaScript performs type coercion and converts the number to a string before concatenating it with the original string. Therefore, the result is the string "kunal2".

 // use the type of operator to find the datatype of the string in the last question
 console.log(typeof abc);
 // output will be "string" because abc is a string variable.
