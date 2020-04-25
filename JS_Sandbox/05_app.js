// String Methods & Concatenation

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait"; //or use ""

// Length
val = firstName.length;

// concat() method
val = firstName.concat(" ", lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l"); //finds letter from opp. direction

// charAt()
val = firstName.charAt("2");
// Get last char
val = firstName.charAt(firstName.length - 1); //-1 because it would give the location of the index of last char

// substring()
val = firstName.substring(0, 4);

// slice() ->slice is mostly used with arrays to pull things out of arrays but you can also use it with string
val = firstName.slice(0, 4); //very similar to substring
val = firstName.slice(-3); //it will start from back and will take the last 3

// split() -> this can be really handy, it splits a string into an array based on a seperator
val = str.split(" "); //so, we can split at the space
val = tags.split(",");

// replace()
val = str.replace("Brad", "Jack");

// includes()
val = str.includes("Hello");

console.log(val);
