// const student={
//     fullname:"Himneesh kalra",
//     marks:90,
//     printmarks:function(){
//         console.log(this.marks)
//     },
// }

// const employee={
//     calctax(){
//         console.log("Tax is 10 %")
//     },
// };

// const himneesh={
//     salary:10000,
//     calctax(){
//         console.log('tax is 20%')
//     }
// }
// himneesh.__proto__=employee;
// himneesh.calctax()

//----------------------------------------

// class ToyotaCar{
//     start(){
//         console.log('car is starting')
//     }
//     stop(){
//         console.log('the car is stopping')
//     }
//     // setBrand(brand){
//     //     this.brand=brand
//     // }
//     constructor(brand,mileage){
//         this.brand=brand;
//         this.mileage=mileage;
//     }
// }

// let innova=new ToyotaCar("Crysta",12);

//--------------------------------------------

// class parent{
//     display(){
//         console.log('Hello')
//     }
//     constructor(){
//         console.log('cons')
//     }
// }

// class child extends parent{
//     display(){
//         console.log('Hiii')
//     }
//     constructor(){
//         super()
//         console.log('child cons')
//     }
    
// }

// let ch=new child();
// ch.display()

//------------------------------------------------

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email
//     }
//     viewData(){
//         console.log('data')
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//     }
    
// }

// let student1=new User("Himneesh","abc@gmail.com")

// // student1.viewData()

// let admin=new Admin("admin","admiun@123")
// try{
//     admin.viewDat()
// }catch(err){
//     console.log('hello')
// }
