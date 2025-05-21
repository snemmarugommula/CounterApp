function isvalid(){
let name=document.getElementById("name").value;
const age=document.getElementById("age").value;
const location=document.getElementById("location").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
let valid=true;
    if(name ===""){
        alert("enter your name properly");
        valid=false;
    }
    if(password=== "" || password.length <8){
alert("enter password with atleast 8 characters")
valid=false;
    }
if(email === "" || !email.includes("@"))
    {
        alert("Please enter a valid email address.");
        valid=false;
    }
    if(location ===  ""){
        alert("please enter location");
        valid=false;
    }
    if(age <=18){
        alert("age must be abobe 18");
        valid=false;
    }
    return valid;
    }
   let button=document.getElementById("button");
   button.addEventListener("click",()=>{
    isvalid();
    console.log("hello");
   });