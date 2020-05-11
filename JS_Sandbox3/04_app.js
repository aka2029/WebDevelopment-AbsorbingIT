// Prototype Inheritance - what if we wanna have one object type inherit from another
// read this "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); //call is function that allows us to call another function from somewhere else in the current context..but remember that it will not inherit the prototypes method for that extra code is required

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting - it shows we can overwrite
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} Welcome to our company`;
};

console.log(customer1.greeting());
