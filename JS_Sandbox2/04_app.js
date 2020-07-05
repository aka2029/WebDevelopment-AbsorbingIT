// This is for how to traverse the DOM

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; //this also gets us text node[</li> is also a text node bec it gives line break], bec of this we move to children bec we just want child elements -> returns node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //says text
val = list.childNodes[0].nodeType; //returns some wierd no and representation of them is shown below

/* 
  Moreover, childNodes returns node list and children returns HTML Collection

  childNode gives all different types of nodes not just elements, children is just going to give us elements. Normally, we'll be using children more than chldNodes

These nos. pertain to what kind of nodes these are ie nodeType:
1 - Element
2 - Attribute(deprecated)
3 - Text node
8 - Comment
9 - Document itself
10- Doctype

*/

// Get children element nodes
val = list.children; // returns HTML collection
val = list.children[1];
list.children[1].textContent = "Hello";
// Children of children
val = list.children[3].children; //it gives subparts to 4th list item
val = list.children[3].children[0]; //specially points to link
list.children[3].children[0].id = "test-link"; //adds test-link id

// We also have first child
val = list.firstChild; //gives #text(due to line break) bec it's the first node
val = list.firstElementChild; //gives first actual element -> mostly used

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Child count elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement; //most cases same as above
val = listItem.parentElement.parentElement; //gives parent of parent

// Get next sibling
val = listItem.nextSibling; //just like childNodes, firstchild & lastchild it will give text node(due to line break)
val = listItem.nextElementSibling.nextElementSibling; //so we can move up & down

// Get next sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
