/*  A LOOK AT THE WINDOW OBJECT....UPTO this point we have been using js as a core language
 and using console to see the output but now before we get into DOM, you must look at the
 window object. The window is the global object in client side JavaScript. nodejs is a js
 runtime that runs as a standalone process on your machine and your computer. so your computer
 system is your environment in nodejs while in client side js, the window or the browser is the environment.
     And whats cool is that both nodejs and chrome both use the same js engine called V8 and it
     works the same way just in different environments
Now the window object has a lot to it, things that js developers use all the time like local
storage, the new fetch API, the navigator object which includes geolocation and then even includes
methods like alert and prompt and confirm. */

/*

// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123); -> this is also a window method

// ALERT
window.alert("Hello World");

// PROMPT -> similar to alert but it takes an input
const input = prompt();
alert(input);

// CONFIRM -> used often when you're deleting something..to make them sure of what they're doing
if (confirm("Are you sure")) {
  console.log("Yes");
} else {
  console.log("No");
}
*/
let val;

// OUTER height and widht -> from outer edges..it also includes console if open
val = window.outerHeight;
val = window.outerWidth;

// INNER height and widht -> if you have scrollbars then inside them
val = window.innerHeight;
val = window.outerWidth;

// SCROLL POINTS -> useful in case when you scroll the sites and see the animation
val = window.scrollY; //vertical scroll
val = window.scrollx; //horizontal scroll

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //its gonna show the query string

/* REDIRECT
 window.location.href = "http://google.com";

 RELOAD
 window.location.reload(); 
*/

// HISTORY OBJECT
window.history.go(-2);
val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
