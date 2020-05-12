// A VERY IMP PART OF Es6 ie ARROW FUNCTIONS OR FAT ARROW FUNCTIONS - saves lines of code, makes thing look neater, lexical this

// /*

const sayHello = function() {
  console.log("Hello");
};

const sayHello = () => {
  console.log("Hello");
};

// One line function does not need braces
const sayHello = () => console.log("Hello");

// Here, we're just returning the string
const sayHello = () => "Hello";

// Same as above
const sayHello = function() {
  return "Hello";
};

// {} this is being looked as function body instead of object literal
const sayHello = () => {
  msg: "Hello";
};

// to fix this wrap this in parenthesis & is returning OBJECT
const sayHello = () => ({ msg: "Hello" });

// Also using parameters - remember single param doesn't need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

sayHello("Akash", "Sharma");

// can also be used for callbacks
const users = ["Nathan", "John", "William"];

const nameLengths = users.map(function(name) {
  // map() is used to map differnt things and returns the array of something different
  return name.length;
});

// Shorter
const nameLengths = users.map(name => {
  return name.length;
});

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);

// */

// AFTER THIS MADE CHANGES IN 07_app.js

/*

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- skeleton cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
      integrity="sha256-ECB9bbROLGm8wOoEbHcHRxlHgzGqYpDtNTgDTyDz0wg="
      crossorigin="anonymous"
    />
    <title>JavaScript Sandbox</title>
  </head>
  <body>
    <h1>Arrow Functions</h1>

    <script src="08_app.js"></script>
  </body>
</html>

 */
