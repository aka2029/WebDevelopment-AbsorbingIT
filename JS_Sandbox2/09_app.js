// JUST FOR THIS COMMENT THE MATERIALIZE FROM INDEX

// KEYBOARD & INPUT EVENTS -> a lot of times when we submit a form then it will redirect us to the same page(that is the default behaviour)... its not doing it here maybe bec of materialize

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// to clearout form with JS -> ie Clear Input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Keydown - as soon as input
// taskInput.addEventListener("keydown", runEvent);
// Keyup - as soon as leave keys
// taskInput.addEventListener("keyup", runEvent);
// Keypress - as soon as press keys
// taskInput.addEventListener("keypress", runEvent);
// Focus - when you click inside the text
// taskInput.addEventListener("focus", runEvent);
// Blur - when you click out
// taskInput.addEventListener("blur", runEvent);
// Cut
// taskInput.addEventListener("cut", runEvent);
// Paste
// taskInput.addEventListener("paste", runEvent);
// Input - fires at any kind of input event
// taskInput.addEventListener("input", runEvent);
// Change
// select.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault(); //we would want to do this to prevent the form from redirecting us to the same page
}
