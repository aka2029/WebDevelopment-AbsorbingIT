// Now look inheritance in ES6 classes better known as sub classes
// super(); calls parent class function
// also remember that since we are extending Person so we can also call the methods that it has and no need to use .create

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost()); //also remember that we cannnot say Person.getMembershipCost() bec we extended customer not person
