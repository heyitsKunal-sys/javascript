console.log("hello world")
// hello world
// document.body
// <body>​…​</body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​</div>​<script src=​"script.js">​</script>​</body>​
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/9.%20DOm%20children%20parents/index.html?vscode-livepreview=true"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​</div>​

// NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]


// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box">​Box1​</div>​
// cont.lastElementChild.style.backgroundColor = "green"
// 'green' last box green ho gya