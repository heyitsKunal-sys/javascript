import fs from "fs/promises"

let a = await fs.readFile("kunal.txt")
let b = await fs.writeFile("kunal.txt" , "this is amazing")
console.log(a.toString())
// kunal is a good boykunalJames