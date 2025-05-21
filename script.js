// let h1=document.querySelector("h1");
// document.querySelector("html").addEventListener("click",()=>{
//     alert("ouch!stop poking me");
//     setTimeout(()=>{
//         h1.style.backgroundColor="red";
//     },1000);
  
// });
// let button=document.querySelector("button");
// let h1=document.querySelector("h1");

// function userName(){
//     const myName=prompt("please enter ur name");
//     localStorage.setItem("name", myName);
//   h1.textContent = `Mozilla is cool, ${myName}`;
// }
// // userName();
// if(!localStorage.getItem("name")){
//     userName();
// }
// else{
//     const heading=localStorage.getItem("name");
//     h1.textContent(`Mozilla is cool,${myName}`);
// }
// const object={
//     name:"godha",
//     bio:()=>{
//         console.log("hello girls");
//     },
//     age:18
// }
// console.log(object.bio());
// console.log(object.name);
// console.log(object.age);
// //object chaining
// const chain={
//      in:{first:"godha",second:"sweety"

//     }
// }
// console.log(chain.in.first);
// console.log(chain.in.second);
// console.log(chain["in"]);


// const person={
//     name:"Godha",
//     age:20,
//     college:"VBIT"
// }
// function assign(para){
//     console.log(person[para]);
// }
// assign("name");
// assign("age");
// assign("college");


function countSelected(num){
    let numberSelected=0;
    for(let i=0;i<num.options.length;i++){
        if(num.options[i].selected){
            numberSelected++;
        }
    }
    return numberSelected;
}
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});

const obj={"foo":1,"hell":2};
for(const[key,val] of Object.entries(obj)){
    console.log(key,val);
}


function fun(...input){
    let sum=0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,23,4));
console.log(fun(23,12,45,7,9,9,4));

const arr=["apple","banana","custard"];
arr.forEach((color)=>{
    console.log(color);
});