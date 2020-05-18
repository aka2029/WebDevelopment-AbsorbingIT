// SINGLETON PATTERN - which is actually a manifestation of module pattern... A singleton object is an immediate anonymous function & it can only return an instance of one object at a time. So, repeated calls to the instructor will only return the same instance. Eg Uses: Maybe when we want one user object created at a time, maybe a logged in user.. that could prevent logging in of two users at once.
// They are frowned upon bec they give global point of access rather than embracing encapsulation & hard to debud. NOT RECOMMENDED

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Akash" });
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); //true bec cannot have more than 1 instance

console.log(instanceA);
