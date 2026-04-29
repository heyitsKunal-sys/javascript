// asynchronus nature of js . its not necessary to what comes first will print first

console.log("iam kunal")
console.log("iam a hacker")

setTimeout(() => {
    console.log("hey iam inside settimeout")
}, 2000);

console.log("the end")

// iam kunal
// script.js:4 iam a hacker
// script.js:10 the end
// script.js:7 hey iam inside settimeout


const callback = (arg)=>{
    console.log(arg)

}

const loadScript = (src , callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("kunal");
    document.head.append(sc)

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)