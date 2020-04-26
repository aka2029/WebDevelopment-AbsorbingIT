// IF STATEMENTS & COMPARISON OPERATOR

/* if(something) {
    do something
  } else {
    do something else
  }
*/

const id = "100"; //assigning

// EQUAL TO
if (id == 100) {
  //comparing
  console.log("correct");
} else {
  console.log("incorrect");
}

// Not Equal To
if (id != 101) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// EQUAL TO value & type
if (id === 100) {
  //so, while assigning if we have string then here it should also be string
  console.log("correct");
} else {
  console.log("incorrect");
}

// NOT-EQUAL TO value & type
if (id !== 100) {
  //so, while assigning if we have string then here it should also be string
  console.log("correct");
} else {
  console.log("incorrect");
}

console.clear();

// Test if undefined
if (typeof id != "undefined") {
  //used typeof to see if id is undefined
  console.log(`The ID is ${id}`);
} else {
  console.log("NO ID");
}

console.clear();

// Greater or Less than -> >, <, >=, <=
if (id > 200) {
  console.log("correct");
} else {
  console.log("incorrect");
}

console.clear();

// If else
const color = "red";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("color is blue");
} else {
  console.log("color is not red or blue");
}

console.clear();

// LOGICAL OPERATORS
const name = "Steve";
const age = 20;

if (age > 0 && age < 12) {
  //makes sure that both are true
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

console.clear();

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

console.clear();

// TERNARY OPERATOR
console.log(id === 100 ? "Correct" : "Incorrect");
