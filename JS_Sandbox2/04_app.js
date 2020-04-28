// This is for how to traverse the DOM

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; //this also gets us text node, bec of this we move to children bec we just want child elements -> returns node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Get children element nodes
val = list.children; // returns HTML collection

console.log(val);
