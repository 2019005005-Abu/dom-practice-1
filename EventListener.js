
  //dom events
  /*
  1.Events Object
  -event type:change,submit,load,unload,open,play,canplay,
  pause,playing,progress,ended,resize,scrool,toggle 

  -properties:Type ,target,preventDefault

  1.MouseEvent Object
  2.KeyboardEevnt Object
  3.FocusEvent Object
  4.ClipBoadEvent Object
  5.DragEvent Object

  */

document.querySelector('button').addEventListener('click',()=>{
    alert("My button is clicked")
})


document.querySelector('button').addEventListener('click',function(){
    alert('I love u Keya');
})


document.querySelector('button').addEventListener('click',MyFun);
function MyFun() {
    alert("This function is clicked");
  }

var myVariable=document.querySelector('.my-style');
myVariable.addEventListener('click',()=>{
    alert("My Paragraph is showing");
})


myVariable.addEventListener('mouseover',()=>{
    myVariable.classList.add('my-style')
})

myVariable.addEventListener('mouseout',()=>{
    myVariable.classList.remove('my-style')
})

//form
var myForm=document.querySelector('input');
myForm.addEventListener('change',(event)=>{
  console.log("Form has changed")
  console.log(event.target.value);
  console.log(event.type);
  console.log(event.target.className);
  console.log(event.target.id);

})
//window object
const programs=document.querySelectorAll('input[name=program]');
 console.log(programs);
 Array.from(programs).map((program)=>{
  program.addEventListener('change',(event)=>{
      if(event.target.checked){
         console.log("checked");
         console.log(event.target.value);
      }
  })
 })

//select
var myVar=document.querySelector('#de');
myVar.addEventListener("change",(event)=>{
   console.log("selected")
   console.log(event.target.value);
   console.log(event.target.type);
})

//select-1

var form=document.querySelector('form');
var varName=document.querySelector('div #name');
var varEmail=document.querySelector('div #email');
var varPassword=document.querySelector('div #password');
var varTexarea=document.querySelector('div #textarea');
console.log(form);
console.log(varName);
//selcet2
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  console.log(varName.value);
  console.log(varEmail.value);
  console.log(varPassword.value);
  console.log(varTexarea.value);

  const userInfo={
    name:varName.value,
    email:varEmail.value,
    passsword:varPassword.value,
    textarea:varTexarea.value,
  }
  console.log(userInfo);

  varName.value=" ";
  varEmail.value=" ";
  varPassword.value=" ";
  varTexarea.value=" ";
})

//BOM Location in Javascript
//windoes object
//location object
console.clear();
console.log(window);
console.log(window.document);
console.log(window.location);
console.log(location)
console.log(location.href);
console.log(location.href);
console.log(location.hash);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);

//BOM
//Browser Object Model
var locationDiv=document.querySelector('.location-div')
console.log(locationDiv);
var p1=locationDiv.children[0];
p1.textContent=location.href;
var p2=locationDiv.children[1];
p2.textContent=location.protocol;
console.log(p2);
var p3=locationDiv.children[2];
p3.textContent=location.hostname;
console.log(p3);
var p4=locationDiv.children[3];
p4.textContent=location.protocol;
var p5=locationDiv.children[4];
p5.textContent=location.port;
console.log(p5);


const  myButton=document.getElementById('visit-button');
myButton.addEventListener("click",()=>{
     location.assign("https://www.youtube.com/watch?v=0pAN-olSQWQ&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=25");
})


//Js BOM
//popup-boxes-alert,confirm,prompt
// var name=alert('I am a Full stack web application developer');
// var confirmation=confirm('Are you sure that he will come or not');
// console.log(name);
// console.log(confirmation);

// function deleteSomething(){
//   let value=confirm("Do you want to delete");
//   if(value){
//     console.log('Deleted')
//   }else{
//     console.log("Not Deleted");
//   }
// }
// deleteSomething();

function welcomeMessage(){
  var h1=document.createElement("h1");
  let text;
  var name=prompt("Enter your name");
  if(name==null || name==''){
      text="No name here";
  }else{
    text=name;
  }
  var textNode=document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}
welcomeMessage();

//
setTimeout(()=>{
console.log("Hi I am Abu Al Shahriar Rifat")
},2000)


function display(){
  console.log("Function has called");
}

console.log(setTimeout(display,1000));

const saveButton=document.querySelector('.save-button');
const message=document.querySelector('.message');
// saveButton.addEventListener('click',()=>{
//   message.textContent="user registration succesfully";
//   setTimeout(()=>{
//     message.textContent=" ";
//   },2000)
// })

// saveButton.addEventListener('click',startFunction);
// function startFunction() { 
//   let date=new Date();
//   let hours=date.getHours();
//   let minute=date.getMinutes();
//   let seconds=date.getSeconds();
//    minute=formatTime(minute);
//    seconds=formatTime(seconds);
//   let time=hours+":"+" "+minute+":"+seconds;
//   message.textContent=time;
//   setInterval(startFunction,1000);
//  }

//  function formatTime(value){
//   if(value<0){
//     value="0"+value;
//   }
//   return value;
//  }
var accesingInput=document.getElementById("#bumTextField");
console.log(accesingButton,accesingInput);
accesingButton.addEventListener("click",function(){
  // var accesingButton=document.getElementById("#checkButton");
   alert("Pop pop message is clicked");
})
