// let arr=[43,54,3,4,6]
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }
//-------------------------------------

// let arr=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// let avg= sum/arr.length;
// console.log(avg)

//---------------------------------------

// let arr=[250,645,300,900,50];
// for(let i in arr){
//     arr[i]=arr[i]-(arr[i]/10)
// }

// for(let i of arr){
//     console.log(i)
// }
//----------------------------------------

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies)
companies.shift()
console.log(companies)
companies.splice(1,1,"Ola")
console.log(companies)
companies.push("Amazon")
console.log(companies)