var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var next4 = document.getElementById("next4");

var previous1 = document.getElementById("previous1");
var previous2 = document.getElementById("previous2");
var previous3 = document.getElementById("previous3");

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");

var tag1 = document.getElementById("tag1");
var tag2 = document.getElementById("tag2");
var tag3 = document.getElementById("tag3");
var tag4 = document.getElementById("tag4");

// next1.onclick = function(){
//   form1.style.left = "-450px";
//   form2.style.left = "20px";
//   circle1.style.backgroundColor = "rgb(230, 17, 152)";
//   circle1.innerHTML = "&#x2713";
//   circle1.style.color = "white";
//   circle1.style.textAlign = "center";
//   tag1.style.color = "rgb(230, 17, 152)";
// }

next1.addEventListener("click", function () {
  form1.style.left = "-450px";
  form2.style.left = "20px";
  circle1.style.backgroundColor = "rgb(230, 17, 152)";
  circle1.innerHTML = "&#x2713";
  circle1.style.color = "white";
  circle1.style.textAlign = "center";
  tag1.style.color = "rgb(230, 17, 152)";
});

previous1.onclick = function () {
  form1.style.left = "20px";
  form2.style.left = "450px";
  circle1.innerHTML = "1";
  circle1.style.color = "black";
  circle1.style.backgroundColor = "white";
  tag1.style.color = "black";
};

next2.onclick = function () {
  form2.style.left = "-450px";
  form3.style.left = "20px";
  circle2.style.backgroundColor = "rgb(230, 17, 152)";
  circle2.innerHTML = "&#x2713";
  circle2.style.color = "white";
  circle2.style.textAlign = "center";
  tag2.style.color = "rgb(230, 17, 152)";
};

previous2.onclick = function () {
  form2.style.left = "20px";
  form3.style.left = "450px";
  circle2.innerHTML = "2";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "white";
  tag2.style.color = "black";
};

next3.onclick = function () {
  form3.style.left = "-450px";
  form4.style.left = "20px";
  circle3.style.backgroundColor = "rgb(230, 17, 152)";
  circle3.innerHTML = "&#x2713";
  circle3.style.color = "white";
  circle3.style.textAlign = "center";
  tag3.style.color = "rgb(230, 17, 152)";
};

previous3.onclick = function () {
  form3.style.left = "20px";
  form4.style.left = "450px";
  circle3.innerHTML = "3";
  circle3.style.color = "black";
  circle3.style.backgroundColor = "white";
  tag3.style.color = "black";

  circle4.innerHTML = "3";
  circle4.style.color = "black";
  circle4.style.backgroundColor = "white";
  tag4.style.color = "black";
};

next4.onclick = function () {
  circle4.style.backgroundColor = "rgb(230, 17, 152)";
  circle4.innerHTML = "&#x2713";
  circle4.style.color = "white";
  circle4.style.textAlign = "center";
  tag4.style.color = "rgb(230, 17, 152)";
};

// function submitForms() {
//   var box1 = document.getElementById("box1").value;
//   var box2 = document.getElementById("box2").value;
//   var box3 = document.getElementById("box3").value;
//   var box4 = document.getElementById("box4").value;
//   var box5 = document.getElementById("box5").value;
//   var box6 = document.getElementById("box6").value;
//   var box7 = document.getElementById("box7").value;
//   var box8 = document.getElementById("box8").value;
//   document.writeln(box1);
//   document.writeln(box2);
//   document.writeln(box3);
//   document.writeln(box4);
//   document.writeln(box5);
//   document.writeln(box6);
//   document.writeln(box7);
//   document.writeln(box8);
// };
