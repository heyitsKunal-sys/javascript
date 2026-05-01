// let obj  = {
//     a : 1,
//     b : 'kunal'
// }
// console.log(obj)


// let animal ={
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };
// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

// rabbit
// {jumps: true}jumps: true[[Prototype]]: Objecteats: true[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// rabbit.eats
// true


class Animals{
    constructor(name){
        this.name = name   // if we write a.bunny we get 'bunny'
        console.log("object is created....")
    }
    eats(){
        console.log("iam eating")

    }
    jumps(){
        console.log("iam jumping")
    }
}
class Lion extends Animals{
    constructor(name){
        super(name)
           
        console.log("object is created....")
    }
    eats(){
        super.eats()  //ab l.eats krenge to l ka method or super ka apna method run hore h
        console.log("iam eating....now")
    }
}    

let a = new Animals("bunny");
console.log(a)
let l = new Lion("shera")
console.log(l);


// constructor() is a special function
// It runs automatically when object is created

// 👉 So whenever you create an object of Animals, this runs first.
// You write new to create an object from a class.
// This is the MOST IMPORTANT line 👇

// 👉 new Animals() means:
// Create a new object from class Animals
// Call the constructor automatically
// Return that object

// So internally it does:

// Create empty object → { }
// Link it to Animals.prototype
// Call constructor()
// Store result in a


// Why methods appear in [[Prototype]]?

// Because:

// 👉 JavaScript stores class methods in prototype, not directly inside object.

// So:

// a itself → empty { }
// methods → stored in prototype