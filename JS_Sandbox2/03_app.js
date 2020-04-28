// selectors that select more than one elements & return either html collection or node list , which are similar to arrays but there are certain things that we can't do. but they can also be converted to regular arrays very easily

/*  

//document.getElementsByClassName

const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]); //so as to use them individually (& like an array)
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

*/

// document.getElementsByTagName
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";
