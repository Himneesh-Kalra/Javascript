// let button=document.querySelector("#btn");
// // button.onclick=()=>{
// //     console.log("Hello")
// // }

// // button.ondblclick=()=>{
// //     console.log('double')
// // }
// button.addEventListener("mouseover",(e)=>{
//     console.log('hello');
//     console.log(e.type)
// })
//---------------------------------------------

let modeButton = document.querySelector("#btn");
let currMode="light"
modeButton.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark"
        document.querySelector("body").setAttribute("class","dark")
    }else{
        currMode="light"
        document.querySelector("body").setAttribute("class","light")
    }
    console.log(currMode)
})