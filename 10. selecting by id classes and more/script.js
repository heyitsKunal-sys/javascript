console.log("kunal")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "yellow" isse 2 index wala box yellow hoga
// document.getElementById("redbox").style.backgroundColor = "yellow" yahan humne ek
// id dedi h element ko isiliye specifically vahi color hoga
// document.querySelector(".box").style.backgroundColor= "yellow"
// .box inline css add kri humne using js but isme 1st box hi yellow hoga.
console.log(document.querySelectorAll(".box"))
// querySelectorAll isse hum sb box ko kr skte h lekin aisa n h ki hum
// console.log(document.querySelectorAll(".box").style.background= "yellow" kr le 
// kyuki error ayega hum elements pe dega chahte h na ki html pe

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})
//  sab ho gye green for loop se

// document.getElementsByTagName("div") ye return krega elemnts by given tag name
//  tag name h div to ye return karega: 
//  [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
// document.getElementsByClassName("box") : return all elements with class "box". 7 elements
// document.getElementsByName("mybox") : return all elements with name "mybox"

// elem.matches(css) is used to check if it matches with the css selector
// e= document.getElementsByTagName("div")
// HTMLCollection(9) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, div.box, redbox: div#redbox.box, "mybox ": div.box]
// e[3].matches("#redbox")
// false
// e[4].matches("#redbox")
// true

// e[4].closest(".container") : nearest ancestor that match the given css selector
// <div class=​"container">​…​</div>​
// e[4].closest("#redbox"): Null


// document.querySelector(".container").contains(e[2])
// true