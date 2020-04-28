/* EXAMINING THE DOCUMENT OBJECT - Among all the things included in the window object, document is one of them, now we'll explore it
In html collection is kind of like array but it is not, we canno't use forEach loop on it which is an array method & then we have node list which are also like arrays but you can use forEach loop on it.
*/

let val; //initializing

val = document; //gives the entire html page in console
val = document.all; //gives the array of all the tags used in html document
val = document.all[1];
val = document.all.length; //we can also do properties
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// we can select stuff without using selectors.. it isn't recommended by it is possible
val = document.forms;
val = document.forms[0];
val = document.forms[0].id; //thus, likewise we can access anything
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; //i.e. anchor tags
val = document.links[0]; //to access individually
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images; //will give empty collection, bec no image is there

val = document.scripts;
val = document.scripts[2].getAttribute("src"); //later thing

// HTML collections if you want to turn them into an array so to use things like forEach
let scripts = document.scripts;

let scriptsArr = Array.from(scripts); //to convert it into array so as to use forEach

scripts.forEach(function(script) {
  console.log(script);
});

console.log(val);
