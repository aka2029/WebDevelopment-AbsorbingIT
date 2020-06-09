/*
console.log("Hello From Node.js...");

// calling person
const person = require("./person");
console.log(person.name);

// calling class Person
const Person = require("./person");
const person1 = new Person("Akash Sharma", 21);
person1.greeting();
*/

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called Listener:", data));

logger.log("Hello World");
logger.log("Hello");
logger.log("World");
logger.log("Hello-World");
