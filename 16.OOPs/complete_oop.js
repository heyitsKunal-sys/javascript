// 1. Object

// An object groups related data and actions together.

// Example:

// let user = {
//     username: "Kunal",
//     email: "abc@gmail.com",

//     login() {
//         console.log("User logged in");
//     }
// };

// user.login();
// Real implementation

// In social media apps:

// let profile = {
//    name: "John",
//    followers: 2000,
//    follow() {}
// };

// A profile naturally has:

// Data → name, followers
// Actions → follow(), unfollow()

// 2. Class

// Classes work as blueprints for creating many similar objects.

// class User{

//     constructor(name,email){

//         this.name=name;
//         this.email=email;

//     }

// }

// let user1 = new User("John","john@gmail.com");
// let user2 = new User("Mike","mike@gmail.com");
// Real implementation

// E-commerce sites:

// class Product{

//     constructor(name,price){

//         this.name=name;
//         this.price=price;

//     }

// }

// Used to create thousands of products.

// 3. Encapsulation

// Encapsulation hides internal data and controls access.

// class Bank{

//     #balance=10000;

//     showBalance(){

//         return this.#balance;

//     }

// }

// let account = new Bank();

// console.log(account.showBalance());
// Real implementation

// ATM systems:

// Users should not directly change:

// account.balance=10000000

// Instead:

// deposit()
// withdraw()

// control the balance safely.

// 4. Inheritance

// Child classes inherit parent functionality.

// class Employee{

//     login(){

//         console.log("Logged in");

//     }

// }

// class Manager extends Employee{

//     approveLeave(){

//         console.log("Leave approved");

//     }

// }

// let manager = new Manager();

// manager.login();
// manager.approveLeave();
// Real implementation

// Company management systems:

// Parent:

// Employee

// Children:

// Manager
// Developer
// HR

// All employees can:

// login()
// logout()

// Specific roles have extra features.

// 5. Polymorphism

// Same method behaves differently.

// class Animal{

//     sound(){

//         console.log("Animal sound");

//     }

// }

// class Dog extends Animal{

//     sound(){

//         console.log("Bark");

//     }

// }

// class Cat extends Animal{

//     sound(){

//         console.log("Meow");

//     }

// }
// Real implementation

// Payment systems:

// class Payment{

//     pay(){}

// }

// class Card extends Payment{

//     pay(){

//         console.log("Card payment");

//     }

// }

// class UPI extends Payment{

//     pay(){

//         console.log("UPI payment");

//     }

// }

// Same method:

// pay()

// Different behavior.

// 6. Abstraction

// Hide internal complexity and show only required functionality.

// class Vehicle{

//     start(){

//         console.log("Vehicle started");

//     }

// }

// User only does:

// car.start();

// They don't see internal logic.

// Real implementation

// Browser fetch API:

// fetch("api/data")

// You only use:

// fetch()

// Browser internally handles:

// network connection
// headers
// request handling
// response parsing

// Hidden complexity = abstraction.

// 7. Static methods

// Belong to the class itself rather than objects.

// class MathUtil{

//     static add(a,b){

//         return a+b;

//     }

// }

// console.log(
// MathUtil.add(5,10)
// );
// Real implementation

// Validation utilities:

// class Validator{

//     static emailCheck(email){

//         return email.includes("@");

//     }

// }

// Use directly:

// Validator.emailCheck("abc@gmail.com")

// No object needed.

// 8. Getters and Setters

// Control reading and updating values.

// class User{

//     constructor(name){

//         this._name=name;

//     }

//     get name(){

//         return this._name;

//     }

//     set name(value){

//         if(value.length<3){

//             console.log("Invalid");

//             return;
//         }

//         this._name=value;

//     }

// }

// let user = new User("John");

// user.name="Mike";
// Real implementation

// Registration systems:

// Prevent:

// empty username
// invalid age
// invalid email

// before saving data.

// 9. Prototype

// JavaScript shares methods through prototypes.

// class Car{

//     drive(){

//         console.log("Driving");
//     }

// }

// let c1=new Car();
// let c2=new Car();

// JS internally stores:

// Car.prototype.drive=function(){

// console.log("Driving");

// }
// Real implementation

// Suppose an app has:

// 10000 users

// Without prototype:

// login()
// logout()

// would be copied 10,000 times.

// With prototypes:

// Only one copy exists and all users share it.

// Saves memory.

// 10. this

// this refers to the current object.

// class Student{

//     constructor(name){

//         this.name=name;

//     }

//     show(){

//         console.log(this.name);

//     }

// }

// let s = new Student("John");

// s.show();
// Real implementation

// Shopping cart:

// class Cart{

//     constructor(total){

//         this.total=total;
//     }

//     checkout(){

//         console.log(
//         this.total
//         );
//     }

// }

// this.total always refers to the current cart.