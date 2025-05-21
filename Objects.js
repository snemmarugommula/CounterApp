// let employee={
//     calcTax(){
//         console.log("the tax rate is 10%");
//     },
// };
// let karan={
//     salary:5000,
// };
// karan.__proto__=employee;
// console.log(karan.calcTax());
// console.log(employee.calcTax());
// class Toyota{
//     constructor(){
//         console.log("new object is created");
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new Toyota;
// fortuner.start();
// let lexus=new Toyota();
// //inheritance
// class Human{
//     constructor(name){
// this.name=name;
// console.log(name);
//     }
// }
// class Godha extends Human{
//     constructor(name){
//         super(name);
//         console.log("exit");
//     }
// }
// let g=new Godha("godha");
// console.log("one")
// setTimeout(()=>{
//     console.log("hello");
// },4000);
// console.log("two");
// // callback hell
// function getData(data,next){
//     setTimeout(()=>{
//         console.log(`data ${data}`);
//         if(next){
//         next();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2);
// });
const url='https://cat-fact.herokuapp.com/facts';
let promise = fetch(url);
console.log(promise);

