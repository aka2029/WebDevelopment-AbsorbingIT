// Destructuring - gives us an easy way to assign varaibles and extract variables from arrays & objects. {destructuring is used with react and modules frameworks as well}

/*
// DESTRUCTURING ASSIGNMENT
// using arrays
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500]; //...rest is called rest operator

// console.log(rest);

// using objects
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, b);

// ARRAY DESTRUCTURING
const people = ["John", "Beth", "Mike"];

const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// PARSE ARRAY RETURNED FROM FUNCTION
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
*/

// OBJECT DESTRUCTRUING - MUCH MORE USEFUL THEN ARRAY DESTRUCTURING, when working with frameworks like react or while using Es6 modules, you're usually gonna deal with object destructuring. You may have some kind of library module where you're exporting an object but you wanna get certain function or property from that object.
const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function() {
    console.log("Hello");
  }
};

// Old Es5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// But now with New Es6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();
