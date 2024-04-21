// for(i=0;i<=5;i++){
//     console.log(i)
// }


// let sum=0;
// let i=0;
// while(i<=5){
//     sum+=i;
//     i++
// }
// console.log(sum)

// let str="Himneesh"
// for(i in str){
//     console.log(str[i])
// }

const student={
    name:"Himneesh",
    age:20,
    college:"IINTM",
    grade:"A"
}

// for(i in student){
//     console.log(student[i])
// }
// -----------------------------------------

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//---------------------------------------------

// let gameNum=25;
// a=prompt("Whats ur guess?");
// if(a==gameNum){
//     alert("Correct guess")
// }else{
//     alert("Better luck next time")
// }

let namee=prompt("Enter your full name")
namee=namee.toLowerCase()
let l = namee.length()
let username="@"+namee+l
alert(username)