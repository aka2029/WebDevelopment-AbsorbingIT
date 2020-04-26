// TEMPLATE LITERALS - part of ES6 but are compatible with all browsers

const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";

// -> a lot of times you're gonna be inserting HTML from JS. so when you fetch something with AJAX and want to putin an unordered list or a table with dynamic data.. then we'll be doing it with js. so, we'll have to create some kind of html string with html and with the dynamic data that you want to insert

let html;

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job " +
  job +
  " </li><li>City: " +
  city +
  " </li></ul>";

html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>";

function hello() {
  return "hello";
}

// With template strings (ES6) -> use backticks ``, this is how it knows that it is a template string... Moreover, Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html; //This is the part of the DOM
