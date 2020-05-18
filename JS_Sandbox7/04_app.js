// OBSERVER PATTERN - which allows to SUBSCRIBE & UNSUBSCRIBE to certain events & certain functionality. It can be used to notify the DOM of certain elements to be updated. AngularJs relies heavily on this patterns through event management within the scope.

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subsribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subsribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function() {
  click.subsribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

/*

TO TURN ES5 INTO ES6 ie THE ABOVE CODE IN CLASSES:

class EventObserver {
  constructor() {
    this.observers = [];
  }
  
  subsribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }
  
  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
  
  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subsribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function() {
  click.subsribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

*/

/*
  HTML REQUIRED FOR THIS CODE :

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JavaScript Sandbox: Patterns</title>
  </head>
  <body>
    <h1>JavaScript Sandbox: Patterns</h1>
    <button class="sub-ms">Subscribe to Milliseconds</button>
    <button class="unsub-ms">Unsubscribe to Milliseconds</button>

    <br /><br />

    <button class="sub-s">Subscribe to Seconds</button>
    <button class="unsub-s">Unsubscribe to Seconds</button>

    <br /><br />

    <button class="fire">Fire</button>

    <script src="04_app.js"></script>
  </body>
</html>

  
*/
