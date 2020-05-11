// USING Object.create - we're gonna be able to create prototypes inside of a parent object and have different properties with different prototype methods or different prototype functions

const personPrototypes = {
  //personPrototype is a variable which is made a object
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
};
