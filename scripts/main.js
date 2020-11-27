

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/opera-new.png') {
    myImage.setAttribute ('src','images/opera-new.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.jpg');
  }
}
let myButton=document.querySelector('button')
let myHeading=document.querySelector('h1')

function setUserName() {
let myName=prompt('Please enter tour name.');
myHeading.textContent=`Mozilla is cool,Chris${myName}`;  
}

if(!localStorage.getItem('name')){
setUserName();
}else{
let storedName=localStorage.getItem('name');
myHeading.textContent='Opera is cool,' +storedName;
}

myButton.onclick=() => {
  setusetName();
 }