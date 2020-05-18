// MODULE & REVEALING MODULE PATTERN

// My favourite pattern** - MODULE PATTERN

// Basic structure - IIFE [immidiately invoked functioinal expression], runs right away
/*
(function() {
  // Declare private vars and functions ie they cann't be accessed from outside the module

  return {
    // Declare public var and functions
    
  }
})();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = "Hello World";
  
  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();
*/

// REVEALING MODULE PATTERN - very very similar to module pattern, the difference being that instead of returning our own public function... you baiscally map an object literal and you map to private function you want to reveal.
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added...");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    //here we're returning object literal
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
console.log(ItemCtrl.get(1));
