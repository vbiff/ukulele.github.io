var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
      myImage.setAttribute ('src','images/image2.jpg');
    } else {
      myImage.setAttribute ('src','images/image1.jpg');
    }
}




var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName + ' this is My Ukulele site';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName + ' this is My Ukulele site';
}
myButton.onclick = function() {
  setUserName();
}