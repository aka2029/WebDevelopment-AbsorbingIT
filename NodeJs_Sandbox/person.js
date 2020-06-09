/*
// creating an object for exporting
const person = {
  name: "Akash Sharma",
  age: 21
};

module.exports = person;
*/

// Exporting class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
