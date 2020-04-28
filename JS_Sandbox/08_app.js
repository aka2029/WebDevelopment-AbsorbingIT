// OBJECT LITERALS -> A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

// **YOU REALLY HAVE TO UNDERSTAND THE DIFFERENCE BETWEEN OBJECT, ARRAY, ARRAY OF OBJECTS, TEMPLATE LITERALS AND OBJECT LITERALS

// define object literals
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL"
  },
  getBirthYear: function() {
    return 2020 - this.age; //this is pertaining to the object, if not used then it will show error
  }
};

let val;

val = person;
// Get specific value
val = person.firstName; //this is recommended
val = person["firstName"]; //you can also see this
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

// this is array of objects
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
