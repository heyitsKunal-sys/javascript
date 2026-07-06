// CREATING A FILE:

const fs = require("fs")





console.log("starting")
// fs.writeFileSync("kunal.txt" , "kunal is a good boy")
// console.log("ending")

fs.writeFile("kunal2.txt", "hey iam here", ()=>{
    console.log("done")
    fs.readFile("kunal2.txt",(error ,data)=>{     //here we use callback   readFile is used to read
        console.log(error , data)  //error aya null and <Buffer 68 65 79 20 69 61 6d 20 68 65 72 65>
        //agr buffer ko pdna h to use data.toString()
        console.log(error , data.toString())   // null hey iam here
    })
})
console.log("ending")
// output:starting
// ending
// done :ye bad me chlne k liye schedule hua  

// writeFilesync prblm create kr skta h so use writeFile

fs.appendFile("kunal.txt", "kunalJames", (e,d)=>{
    console.log(d)
})
// kunal is a good boykunalJames in kunal.txt
// callback hell se bachna h apne ko