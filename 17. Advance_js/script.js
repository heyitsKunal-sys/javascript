async function sleep() {
    return  new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a,b,c){
    return a+b+c;
}




(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b) 
    // let [x,y] = [1,5,7]
    // console.log(x,y)  
    //  x assign ho jayega 1 ko y 5 ko 7 kisiko ni
    // let [x ,y, ...rest] = [1,2,3,4,5,6]
    // console.log(x,y, ...rest)
    // 1 2 [3,4,5,6,]
    // if we use rest only instead of ...rest  to rest me 3 ata baki kuch n
    let obj = {
        a : 1,
        b:2,
        c:3,


    }
    let {a,b} = obj  
    console.log(a,b)
    //  1  2 

    let arr = [1,2,3,]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
    // spread operator value of khol deta h dono value 6 denge
}) () 