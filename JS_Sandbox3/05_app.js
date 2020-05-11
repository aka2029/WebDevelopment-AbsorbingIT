// USING Object.create - we're gonna be able to create prototypes inside of a parent object and have different properties with different prototype methods or different prototype functions

const personPrototypes = {
  //personPrototype is a variable which is made a object. And this as a whole becomes a prototype function and has various prototype methods
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());

// below we are trying another syntax than above
const akash = Object.create(personPrototypes, {
  firstName: { value: "Akash" },
  lastName: { value: "Sharma" },
  age: { value: 21 }
});

console.log(akash);

console.log(akash.greeting());
