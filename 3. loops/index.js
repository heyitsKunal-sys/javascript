console.log(" ab padenge loops k bare main")
 


   
let a =1;
for ( let i = 0; i <100 ; i ++){
    console.log( a+ i)

}

// for in loop
let obj = {
    name : "kunal",
    role : "progammer",
    company : "google",

}
for (const key in obj) {
    console.log( key )
    
    
    
 }
// ouput :name
// role
// company 

// for of loop
 for (const c 
     of "kunal") {
        console.log(c)
    
 }
//output : 
// k
// u
// n
// a
// l 

//  while loop
let i =0;
while ( i<6) {
    console.log(i)
    i++
}
// output :0 1 2 3 4 5

// do while loop
let s = 0;

 do {
    console.log(s)
    s++;
    
 } while (s<6);
//output : 0 1 2 3 4 5 
/* but if s = 10 the it will first print 10
then check the while codntion */