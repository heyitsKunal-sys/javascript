let button = document.getElementById("btn")


// button.addEventListener("click" , ()=>{
//     alert("i was clicked yayyyyy")
//     // ek alert message aaajyega!!!!

// })  

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// button.addEventListener("dblclick" , ()=>{ 
//     document.querySelector(".box").innerHTML = " <b>  hey you were clicked </b>"

// })  
//  hey iam a button ki jgah hey you were clicked ayega

button.addEventListener("contextmenu" , ()=>{ 
    alert("han bhai kya scn")

}) 
// right click krne pe alert msg open ayega

document.addEventListener("keydown" ,(e)=>{
    console.log(e.key , e.keyCode) 
})
// ye key mtlv kuch bhi daba do keyboard pe jaise g press kiya to sath me uksi value aa jayegi key ki
//  g :78 