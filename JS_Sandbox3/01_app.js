// CONSTRUCTOR AND 'this' KEYWORD

// we just dont want to learn ES6 classes, we also want to know the basics by knowing ES5

/*
//(object literals) - This is fine when you want to deal with one object or one instance but if you want to create multiple instances of a certain type of object then you wanna create a constructor. If you wanna get into prototypes and inheritance and all that kind of stuff then you wanna know about it. 

// A method is a function that is inside of an object

const akash = {
  name: "Akash",
  age: 21
};

console.log(akash.name);
*/

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function() {
    // this is a method
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); //gives year in specified date as per universal time
  };
}

// console.log(this); // when we use this in global scope then we're gonna get window object
// const akash = new Person("Akash", 21);
// const john = new Person("john", 22);

// console.log(john.age);

const akash = new Person("Akash", "09-02-1998");
console.log(akash.calculateAge());
