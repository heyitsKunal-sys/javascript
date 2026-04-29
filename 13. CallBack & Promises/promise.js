
console.log('this is a promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5){
        reject("no random number was supporting you")
    }
    else{
        setTimeout(() => {
            console.log("yes iam done")
            resolve("kunal")
        }, 3000);

    }
})
// prom1.then((a) =>{
//     console.log(a)
    
// }).catch((err) => {
//     console.log(err)
// })
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5){
        reject("no random number was supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log("yes iam done 2")
            resolve("kunal 2")
        }, 1000);

    }
})
let p3 = Promise.all([prom1 , prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err =>{
    console.log(err);
    
})

// this is a promise
// promise.js:30 yes iam done 2
// promise.js:11 yes iam done
// promise.js:38 (2) ['kunal', 'kunal 2']
// dono promise jab resolve hue tan ye output ayi 
// jab koi promise resolve n hue dono me se to koi value return n krega
