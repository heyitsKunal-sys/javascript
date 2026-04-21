console.log("hello world")

let age = 45;
if (age > 18) {
    console.log("you can drink");
}

else{
    console.log( " you can not drink ");
}
// output : you can drink 

let age2 = 17;
let grace = 2;
if( (age2 + grace) > 18) {
    console.log("you can drink")

}
else{
    console.log("you can not drink")
}
// output : you can drink

let kunal = "3";
let kunal2 = 3;
console.log( "3"==3)
//output : true cause == compares values that means both have value 3 but if we use === then it will gives false.
let kunal3 = "3";
let kunal4 = 3;
console.log( "3"===3)
//output: false.=== this is a equals to and type operator.

 a = 45;
 b = 57;
  console.log( a + b) // output: 102

 c= 23;
 d= 46;
 console.log(c +d ) // 69

e = (a + b) != ( c+ d) && (c + d) != ( a+ b);
console.log(e)
// output true
e1 = (a + b) != ( c+ d) || (c + d) != ( a+ b);
console.log(e1)
//output : true

/*
aise bhi likh sakte hai

*/


let marks = 70;
if (marks >= 90) {
    console.log("grade: A")
}
else if( marks >= 75){
    console.log("grade:B");

}
else if( marks >= 65) {
    console.log("grade: C")
}
else{
    console.log("Fail")
}
// output : grade : C

// TERNARY OPERATOR: evaluates a block of code through given condition
a = 6;
b = 8;
c = (a> b) ? ( a+b) : (a-b);
console.log(c)
//  output : -2 


let num = 10;
if ( num % 2==0 && num % 3==0) {
    console.log("number is divided by 2 and 3")

}
else {
    console.log(" number is not divided")
}
//  SWITCH CASE:
const fruit = "MANGO";

switch (fruit) {
  case "Banana":
    console.log("Bananas are $0.59/lb.");
    break; // Stops execution and exits the switch
  case "Apple":
    console.log("Apples are $1.29/lb.");
    break;
  default:
    console.log("Sorry, we are out of  + fruit " );
}
/* Core Components
case: Defines a specific value to match against the expression.
break: Prevents "fall-through," where the program continues to execute subsequent cases even if they don't match.
default: An optional fallback that runs if no case matches the expression.
*/
