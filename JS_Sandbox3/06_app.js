// ES6 - This uses classes and is quite easy when coming from other programing languages like java. Bec ES5 is quite wierd at first and this make stuff bit easy.

class Person {
  //under the proto pseudoproperty we see that we have person as a constructor, because underthe hood in JS engine it works like the exact same way. That's why classes are called SYNTACTIC SUGARS or CONVINIENCE SYNTAX becase it changes the way that we write them not the way that it works in the underlying engine

  // Moreover any method that we add inside the class is gonna be added inside the prototype
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    //its a static method not a function so console.log(mary.addNumbers(1,2)) will not work
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

mary.getsMarried("Thompson"); //running this is imp bec its not same as calculateAge bec that function was returning something

console.log(mary);

console.log(Person.addNumbers(1, 2)); //so add class name not object name
