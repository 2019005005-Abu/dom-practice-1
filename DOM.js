
//document object Model

//1.we can find using dom
//2.we can change using dom
//3.we can add  using dom
//4.We con delete HTML elements

//document.getElementById

// var d_1=document.getElementById("headingId")
// d_1.innerHTML="I am a full stack web application Developer"
// d_1.style.background="red";
// console.log(d_1);
// var p_1=document.getElementById('p1');
// p_1.innerHTML="I am working as a software Enginner";
// console.log(p_1);


//document.getElementsByClassName

//  var ParaStyle=document.getElementsByClassName('para_1')[0];
// ParaStyle.style.background="red";
// console.log(ParaStyle);
// //1
// var ParaStyle2=document.getElementsByClassName('para_2')[0];
// ParaStyle2.style.background="yellow";
// console.log(ParaStyle2)
// //2
// var ParaStyle3=document.getElementsByClassName('para_3')[0];
// ParaStyle3.style.background="green";
// console.log(ParaStyle3)

//document.getElementsByTagName
// var taggingLink=document.getElementsByTagName("a")[0];
// taggingLink.innerHTML="Click Here";
// taggingLink.style.textDecoration="none";
// taggingLink.style.background="red";
// taggingLink.style.color="yellow";
// taggingLink.style.padding="10px 20px";
// taggingLink.style.cursor="pointer";
// taggingLink.style.borderRadius="10px";
// console.log(taggingLink);
//
// var stylingHeading1=document.getElementsByClassName('h1')[0];
// stylingHeading1.style.color="yellow";
// console.log(stylingHeading1);


//creating heading 3 
// var heading3=document.createElement("h1");
// var text=document.createTextNode("Javascript Programming");
// var h3=heading3.appendChild(text);

// var MyDiv=document.getElementsByClassName('my-div')[0];
// MyDiv.append(h3);
// //adding haeding-4
// var heading4=document.createElement("h1");
// var text2=document.createTextNode("Python Programming");
// var h4=heading4.appendChild(text2);
// //find
// MyDiv1=document.getElementsByClassName('my-div')[0];
// MyDiv1.append(h4);

// //remove the elements
// var DeletingElements=document.getElementsByClassName('my-div')[0];
// var d0=MyDiv.removeChild(DeletingElements);
// console.log(d0);
//adding heading top 
//  var headingTop_0=document.createElement('h1');
//  var textHeading_0=document.createTextNode("C programming");
//  headingTop_0.appendChild(textHeading_0);
//  var heading_1=document.getElementsByTagName('h1')[1];
//  MyDiv.insertBefore(headingTop_0,heading3);
//document.getElementsByTagNameNS

// var h_1=document.getElementsByTagName('h1')[0].style.background="red";
// var h_2=document.getElementsByTagName('h1')[1].style.background="green";
// var h_3=document.getElementsByTagName('h1')[2].style.background="yellow";
// console.log(h_1,h_2,h_3)

//document.querySelector

//document.querySelectorAll

var accesingBtn=document.getElementById("#check-btn");
var accesingInput=document.getElementById("#bumTextField");
accesingBtn.addEventListener("click",function(){
    alert('button');
})

