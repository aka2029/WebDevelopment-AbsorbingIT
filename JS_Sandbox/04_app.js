// Numbers and the Math Object

const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object .. math is an object i.e it has properties and methods. A property is basically an attribute and a method is just a function
val = Math.PI;
val = Math.E; //eulers number
val = Math.round(2.8);
val = Math.ceil(2.4); //round up
val = Math.floor(2.8); //round down
val = Math.sqrt(64);
val = Math.abs(-3); //gives the absolute version of it
val = Math.pow(8, 2); //8 to the power 2
val = Math.min(2, 25, 94, 1, 3, 65); //returns min
val = Math.max(2, 25, 94, 1, 3, 65); //returns max=
val = Math.random(); //generates random nos. (any)
val = Math.random() * 20; //this would give random no. between 0 and 19... with decimal arm
val = Math.random() * 20 + 1; //this would give random no. between 1 and 20... with decimal arm
val = Math.floor(Math.random() * 20 + 1); //this would give random whole no. between 1 and 20

console.log(val);
