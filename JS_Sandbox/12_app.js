// FUNCTION DECLARATIONS & EXCEPTIONS

// FUNCTION DECLARATIONS
function greet() {
  // console.log("Hello");
  return "Hello"; // but in this we are just returning it and not logging it to the console
}

console.log(greet());

// ---------------------------------------------------------------------

console.clear();

function greet(firstName, lastName) {
  //this we used to do before es6
  if (typeof firstName === "undefined") {
    firstName = "John";
  }
  if (typeof lastName === "undefined") {
    lastName = "Doe";
  }

  return "Hello " + firstName + " " + lastName;
}

console.log(greet()); //if we pass anything here then it will overwrite

// ---------------------------------------------------------------------

console.clear();

function greet(firstName = "John", lastName = "Doe") {
  // with es6 we can do this
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());

// ------------------------------------------------------------------
console.clear();

// FUNCTION EXPRESSION

const square = function(x) {
  //or can do default like (x = 3)
  return x * x;
};

console.log(square(8));

// ------------------------------------------------------------------
console.clear();

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs, we are making it an expression by putting it inside parenthesis ** GET TO KNOW THEM BETTER **

(function() {
  console.log("IIFE Ran..");
})();

(function(name) {
  // we are declaring it & it ran at the same time
  console.log("Hello " + name);
})("Brad");

//-----------------------------------------------------------------------
console.clear();

// PROPERTY METHODS -> when a func is put inside an object(ie this -> {}) it is called a method
const todo = {
  add: function() {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log("Edit todo ${id}");
  }
};

todo.delete = function() {
  //we can reate function outside of todo
  console.log("Delete todo");
};

todo.add();
todo.edit(22);
todo.delete();
