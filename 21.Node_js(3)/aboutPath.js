import path from 'path'

let myPath = "K:\\javascript\\21.Node_js(3)\\Kunal.txt"
console.log(path.extname(myPath)) //.txt
console.log(path.dirname(myPath)) //K:\javascript\21.Node_js(3)
console.log(path.basename(myPath)) //Kunal.txt

console.log(path.join()) // this function can join 2 paths 