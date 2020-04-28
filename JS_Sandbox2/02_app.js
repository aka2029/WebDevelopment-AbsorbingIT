/* DOM SELECTORS FOR SINGLE ELEMENTS - After this modern JS, jQuery is never suggested as it is unnecessary most of the time, it adds bloat to the application.
-> one things that jQuery is good for is quick simple plugins or scripts that you need to do a specific action but never for DOM manipulation
 */

// DIFFERENT SELECTORS - COUPLE ELEMENT & SINGLE ELEMENT SELECTORS , previously we've looked at couple now let's see 2 single element selectors

/* */
// -------------------------------------------------------------------------
// document.getElementById()
console.log(document.getElementById("task-title")); //selecting h5

// get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

// we are calling document.getElementById so many times & this is not efficient so lets put it inside variable
const taskTitle = document.getElementById("task-title");

// change styling - don't do, just know
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById("task-title").style.display = "none"; -> we wanna do this while implementing events and for dynamic functionality

// change contect
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = "<span style = 'color:red'>Task List</span>";

// -------------------------------------------------------------------------
// document.querySelector() - much powerfull and works like jQuery
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); //if more than 1, then it will get 1st one

document.querySelector("li").style.color = "red"; //remember, this is single query selector so, will just select the first one
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; //still only 1st odd got selected
