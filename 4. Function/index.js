function nice(name) {
    console.log("hey" + name + "you are nice");   
    console.log("hey" + name + "you are nice");   
    console.log("hey" + name + "you are good");
    console.log("hey" + name + "you looks great");
}

nice("sara");
nice("janhvi");

function sum( a , b) {
    console.log(a + b);
}
sum(2, 3);
sum(5, 10); 
// output: 5
// output: 15

function sum( a , b) {
    return a + b;
}

result = sum(2, 3);
console.log(result); // output: 5
// javascript me return ka use karke hum function ke andar se value ko bahar nikal sakte hain.
// return ke baad jo bhi code likha hoga wo execute nahi hoga.
// agar hum function ke andar return ka use nahi karte hain to function undefined return karega.

function sum( a , b) {
    return a + b;
    console.log("this will not be executed");
}

// OPTIONAL PARAMETERS
function num (a , b, c= 3) {
    return a + b + c;
}
result = num(2, 3);
console.log(result); // output: 8
// agar hum function ke andar optional parameter ka use karte hain to hum us parameter ko call karte waqt pass nahi karte hain to bhi function sahi se execute hota hai aur default value use karta hai.

// Arrow function
const add = (a, b) => {
    return a + b;
}
result = add(2, 3);
console.log(result); // output: 5
// arrow function me hum function ke andar return ka use karte hain to hum usko curly braces ke andar likhte hain aur return statement ka use karte hain. agar hum arrow function me sirf ek expression likhte hain to hum usko curly braces ke bina bhi likh sakte hain aur return statement ka use nahi karna padta hai.
const value = (a, b) => a + b;
result = value (2, 3);
console.log(result); // output: 5

/*
Ques: MAKE  a faulty calculator which performs wrong operations
+ -----> -
* -----> +
- -----> /
/ -----> **
it takes two number as input
and it pweforms wrong operations only 10% of the time


*/
let random = Math.random();

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operator");
// prompt() function is used to take input from the user. it takes a string as an argument and displays a dialog box that prompts the user to input some text. it returns the text entered by the user as a string.
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if (random > 0.1) {
    // perform correct operation
    
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);       
    // eval() function is used to evaluate a string as a JavaScript expression. it takes a string as an argument and evaluates it as a JavaScript code. it can be used to perform mathematical operations on the string.
    //  ${} is used to insert the value of a variable into a string. it is called template literals. it is enclosed in backticks (`) and the variable is enclosed in ${}.
    // eval() function is a powerful function that can be used to execute any JavaScript code. it can be used to perform mathematical operations on the string. it can also be used to execute any JavaScript code that is passed as a string. it can be dangerous if the string is not properly sanitized, as it can lead to security vulnerabilities.



 
}

else{
    // perform wrong operation
    c= obj[c];
    alert(`The result is ${eval(`${a} ${obj[c]} ${b}`)}`);
}