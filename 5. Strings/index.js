let a = "kunal"
console.log(a)
// output: kunal
console.log(a[0])
// output: k
// strings are immutable in js means we cannot change the value of a string once it is created
// a[0] = "K" // this will not change the value of a
// console.log(a) // output: kunal
// to change the value of a string we can create a new string and assign it to the variable

let sentence = `the name "is" 'kunal'`
console.log(sentence)
// output: the name "is" 'kunal'
// we can use backticks to create a string that can contain both single and double quotes without the need for escaping them

let name = "kunal"
let k = `this is ${name}`
console.log(k)
// output: this is kunal
// we can use template literals to create a string that can contain variables and expressions

// Escape sequence characters
let str = "this is a string with a newline character\nand this is the second line"
console.log(str)
// output: this is a string with a newline character
// and this is the second line
// we can use escape sequence characters to create special characters in a string

let nam = 'adam d \'anglo\'kuch bhi \" likh \"de' 
console.log(nam)
// we can use single or double quotes inside  a string 
/*
\n = newline
\t = tab
\r = carriage return
example */
let str1 = "this is a string with a newline character\nand this is the second line"
console.log(str1)
// output: this is a string with a newline character
// and this is the second line
let str2 = "this is a string with a tab character\tand this is the second part"
console.log(str2)
// output: this is a string with a tab character    and this is the second part    
let str3 = "this is a string with a carriage return character\rand this is the second part"
console.log(str3)
// output : this is a string with a carriage return character
// and this is the second part

let hey = "kunal"
hey.length // this will give the length of the string
console.log(hey.length)
// output: 5
// we can use the length property to get the length of a string

let hello = "hello world"
console.log(hello.toUpperCase())
// output: HELLO WORLD
// we can use the toUpperCase() method to convert a string to uppercase
console.log(hello.toLowerCase())
// output: hello world
// we can use the toLowerCase() method to convert a string to lowercase
console.log(hello.slice(2,4))
// output : ll 4 index not included
console.log(hello.replace("world" , "duniya"))
// output: hello duniya
console.log(hello.concat(hey))
// output: hello worldkunal
console.log(hello.trim())
// output: hello world
// we can use the trim() method to remove whitespace from the beginning and end of a string

// strings are immutable but how to change a string if it is immutable
let str4 = "hello"
str4 = "s" + str4.slice(0) // this will change the value of str4 to "hello"
console.log(str4)
// output: shello  why in hello h index is 1 but not 0 because we are adding "s" at the beginning of the string so the index of "h" will be 1 now. 
str4 = str4.slice(0,1) + "a" + str4.slice(2) // this will change the value of str4 to "hallo"
console.log(str4)
// output: hallo here e is not included because we are slicing the string from index 0 to 1 and then adding "a" and then slicing the string from index 2 to the end of the string.