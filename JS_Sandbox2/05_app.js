// THIS IS SOMETING YOU'LL BE DOING IN REAL WORLD PROJECT .... !!

// CREATING ELEMENTS -> this shows we can create dom elements from scratch with vanilla js
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// **Create text node and append ie we want to put something inside of something and create text node will put text node inside the li tag
li.appendChild(document.createTextNode("Hello World"));

// Create new link element
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
// Now append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
