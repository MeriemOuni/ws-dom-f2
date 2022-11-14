// console.log("hello");

// creating an element
var btn = document.createElement("button");
btn.innerHTML = "add";
document.body.appendChild(btn);

// change the content of the button
var btn = (document.querySelector("button").innerHTML = "delete");

// adding id attribute
var btn = document.querySelector("button");
btn.setAttribute("id", "myBtn");
console.log(btn);

// changing the id value
btn.id = "bouton";

// adding style to the h3
var heading = document.querySelector(".card > h3");
heading.style.color = "blue";
heading.style.fontSize = "40px";

// remove an element
var para = document.getElementById("paragraphe");
para.remove();
