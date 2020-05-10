// BUILT IN CONSTRUCTORS (Eg. new Date() & many are not recommended to be used)

// String
const name1 = "Jeff"; //string
const name2 = new String("Jeff"); //object not primitive value - good thing is that we can add properties to it but still the upper method is prefered

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name2);

if (name1 === "Jeff") {
  //here it says no for name2 but if we use == then says yes because we are not checking the type
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5; //number
const num2 = new Number(5); //object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

// console.log(getSum1(1, 1));

// Object
const john = { name: "John" }; //object
const john2 = new Object({ name: "John" }); //object

console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions - this is a topic in itself
const reg1 = /\w+/;
const reg2 = new RegExp("w+");

console.log(reg1);
