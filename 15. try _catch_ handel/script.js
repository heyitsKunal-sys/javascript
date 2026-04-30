// const prompt = require("prompt-sync")();  //this line is needed to make prompt work in node.js
// let a = prompt("enter first number:");

// let b = prompt("enter second number:");
// if (isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry this is not allowed")
// }
// let sum = parseInt(a) + parseInt(b)
// console.log(sum)
// if we dont use parseInt then sum will print like 4+5 = 45 "its a string"
// enter first number:harry
// enter second number:12
// NaN : not  a number

const prompt = require("prompt-sync")();  //this line is needed to make prompt work in node.js
let a = prompt("enter first number:");

let b = prompt("enter second number:");
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)
let x = 1; // jab mene x define kr diya or output aayi 12+12 = 24, still finally bhi print hua pr kyu???
try{
    console.log(sum *x)

}
catch (error){
    console.log("error aagya bhai")

}
// enter first number:2
// enter second number:3
// error aagya bhai
finally{
    console.log("files are being closed")

}
// jab mene x define kr diya or output aayi 12+12 = 24, still finally bhi print hua pr kyu???
// lekin agar mene ise ek function me wrap kr diya to 
// or  mene rertun kr di true condition ko to finally age cahlega hi n

// function main(){
//     let x = 1;
//     try{
//         console.log(sum *x)
//         return true
//     } 
//     catch (error){
//         console.log("error aagya bhai")
//         return false
//     }
//     finally{
//         console.log("files are being closed")

//     }


   

// } 
// let c = main()
// yahan dekh x defined h to value return true hogi to age kuch bhi implement nahi hoga
    
