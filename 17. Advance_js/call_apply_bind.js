// call(), apply(), and bind() are used to control the value of this in JavaScript.

// The biggest confusion is usually:

// call() → executes immediately
// apply() → executes immediately
// bind() → does not execute immediately; returns a new function

// Let's build it step by step.

// First understand the problem
// let person = {
//     name: "Kunal",

//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// person.greet();

// Output:

// Hello Kunal

// Here:

// this.name

// means:

// person.name

// Now suppose:

// let person2 = {
//     name: "Rahul"
// };

// What if we want person.greet() to use Rahul instead?

// 1. call()

// call() executes function immediately and changes this.

// Syntax:

// functionName.call(object,arg1,arg2)

// Example:

// let person = {
//     name:"Kunal"
// };

// function greet(city,country){

//     console.log(
//         "Hello " +
//         this.name +
//         " from " +
//         city +
//         "," +
//         country
//     );

// }

// greet.call(
//     person,
//     "Delhi",
//     "India"
// );

// Output:

// Hello Kunal from Delhi,India

// What happened?

// JS internally did something like:

// this = person

// so:

// this.name

// became:

// person.name
// 2. apply()

// apply() is almost the same as call().

// Difference:

// Arguments are passed as an array.

// Syntax:

// functionName.apply(object,[arg1,arg2])

// Example:

// let person = {
//     name:"Kunal"
// };

// function greet(city,country){

// console.log(
// "Hello "+
// this.name+
// " from "+
// city+
// ","+
// country
// );

// }

// greet.apply(
// person,
// ["Delhi","India"]
// );

// Output:

// Hello Kunal from Delhi,India

// Difference only:

// call()

// greet.call(person,"Delhi","India")

// apply()

// greet.apply(person,["Delhi","India"])
// Practical use of apply()

// Suppose:

// let numbers=[10,30,5,90];

// console.log(
// Math.max.apply(
// null,
// numbers
// )
// );

// Output:

// 90

// Because:

// Math.max(10,30,5,90)

// needs separate values, while apply() spreads array values.

// (Modern JS usually uses spread operator:)

// console.log(
// Math.max(...numbers)
// );
// 3. bind()

// bind() does not execute immediately.

// It creates and returns a new function.

// Syntax:

// let newFunction=
// functionName.bind(object)

// Example:

// let person = {
//     name:"Kunal"
// };

// function greet(){

// console.log(
// "Hello "+
// this.name
// );

// }

// let newFunc=
// greet.bind(person);

// newFunc();

// Output:

// Hello Kunal

// Notice:

// greet.bind(person)

// didn't run.

// Only:

// newFunc()

// executed.

// Why bind is used a lot in web development

// Suppose button click:

// HTML:

// <button id="btn">
// Click
// </button>

// JS:

// class User{

//     constructor(name){

//         this.name=name;

//     }

//     showName(){

//         console.log(this.name);

//     }

// }

// let user=
// new User("Kunal");

// document
// .getElementById("btn")
// .addEventListener(
// "click",
// user.showName.bind(user)
// );

// Without bind():

// addEventListener(
// "click",
// user.showName
// )

// Output:

// undefined

// Because this becomes the button element.

// bind(user) permanently fixes this.

// Visual memory trick

// Imagine function:

// greet()

// and object:

// person

// call

// greet.call(person)

// Meaning:

// "Use person and execute now"

// apply

// greet.apply(person,[args])

// Meaning:

// "Use person with array arguments and execute now"

// bind

// greet.bind(person)

// Meaning:

// "Use person later"