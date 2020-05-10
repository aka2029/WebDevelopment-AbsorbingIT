// PROTOTYPES - One of the most difficult topics in JS, each object in js has a prototype and a prototype is an object itself, all objects inherit their methods and properties from their prototype

// Object.prototype - when dealing with obj literals
// Person.prototype - when dealing with obj ceated with constructors

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith");

console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName")); //simple syntax
console.log(mary.hasOwnProperty("getFullName")); //false but above is true
