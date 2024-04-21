// let headi = document.getElementById("heading")
// console.dir(headi)

// let headings=document.getElementsByClassName("heading")
// console.log(headings)

// let elements=document.querySelector(".heading")
// console.dir(elements)

// let para=document.querySelector("#para")
// console.dir(para)

// console.log(para.tagName)
// console.log(elements.tagName)


// let child=document.querySelector(".hello").lastChild
// console.log(child)

// let div= document.querySelector("div");
// console.dir(div)

// let heading2=document.querySelector(".heading2");
// heading2.innerHTML="<p>Hello</p>"

//----------------------------------------------------

// let elem=document.querySelector(".heading2");
// elem.append(" From Himneesh")

//----------------------------------------------------

let divs=document.querySelectorAll(".box")

// divs[0].append(" this is first")
// divs[1].append(" This is second")
// divs[2].append(" this is third")

// let idx=0;
// let arr=[" This is first"," This is second"," This is third"]
// for(let div of divs){
//     div.append(arr[idx])
//     idx++
// }

// console.log(divs[0].getAttribute("class"))

// divs[0].setAttribute("class","newclass")
// console.log(divs[0].getAttribute("class"))

//----------------------------------------------------

// let button =document.querySelector(".newbtn");
// for(let div of divs ){
//     div.after(button)
// }

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi , My name is Himneesh </i>";

// document.querySelector("body").prepend(newHeading);

//-----------------------------------------------------

// let button=document.createElement("button")
// button.innerText="Click Me!!"
// button.style.backgroundColor="red"
// document.querySelector("body").prepend(button)

//-----------------------------------------------------

// let para=document.querySelector(".para")

// para.classList.add("newClass")

// console.log(para.classList)