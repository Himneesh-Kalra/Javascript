// console.log('one')
// console.log('two')

// function hello(){
//     console.log('hello')
// }
// setTimeout(hello,2000)

// console.log('for')

// setTimeout(()=>{
//     console.log('hello2')
// },3000)

//----------------------------------------

// function sum(a,b){
//     console.log(a+b)
// }

// function calci(a,b,sumCallback){
//     sumCallback(a,b)
// }

// calci(10,23,sum)

//----------------------------------------

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('Data=',dataId)
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// //callBack hell

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })

//----------------------------------------

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(dataId)
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
// }
// let result=getData(1)

//----------------------------------------

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('im a promise')
//         // resolve("success")
//         reject("an error occured")
//     })
// }
// let promise=getPromise()
// promise.then(()=>{
//     console.log('promise fulfilled')
// })
// promise.catch(()=>{
//     console.log("Never mind")
// })

//----------------------------------------

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('some data one')
//             resolve("Success")
//         },2000)
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('some data two')
//             resolve("Success")
//         },2000)
//     })
// }


// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res)
//     console.log('fetching next data')
//     let p2=asyncFunc2();
//     p2.then(()=>{
//         console.log(res)
//     })
// })

//----------------------------------------

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(dataId)
//             resolve("success")
//         },2000)
//     })
// }

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res)
// })

// getData(1).then((res)=>{
//     getData(2).then(()=>{
//         getData(3)
//     })
// })

// getData(1).then(()=>{
//     return getData(2)
// }).then(()=>{
//     return getData(3)
// })
// .then(()=>{
//     return getData(4)
// })

//-------------------------------------------

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('weather data')
//             resolve(200)
//         },2000)
//     })
// }
// async function getWeatherData(){
//     await api()
//     await api()
// }
// getWeatherData()

//------------------------------------------------

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Data is ',dataId)
//             resolve(200)
//         },2000)
//     })
// }

// (async function getFinalData(){
//     for(let i=0;i<5;i++){
//         await getData(i+1)
//     }

// })()

// getFinalData()