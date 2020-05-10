// CONSTRUCTOR AND 'this' KEYWORD

// we just dont want to learn ES6 classes, we also want to know the basics by knowing ES5

/*
//(object literals) - This is fine when you want to deal with one object or one instance but if you want to create multiple instances of a certain type of object then you wanna create a constructor. If you wanna get into prototypes and inheritance and all that kind of stuff then you wanna know about it. 
const akash = {
  name: "Akash",
  age: 21
};

console.log(akash.name);
*/

// Person constructor
function Person(name) {
  this.name = "name";
}

const akash = new Person("Akash");
const john = new Person("john");
