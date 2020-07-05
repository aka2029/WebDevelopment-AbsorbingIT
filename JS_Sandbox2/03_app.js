// DOM SELECTORS FOR MULTIPLE ELEMENTS - selectors that select more than one elements & return either html collection or node list , which are similar to arrays but there are certain things that we can't do. but they can also be converted to regular arrays very easily

/*  */
// --------------------------------------------------------------------------
//document.getElementsByClassName

const items = document.getElementsByClassName("collection-item"); //this returns HTML Collection and each of them on clicking shows all the properties available
console.log(items);
console.log(items[0]); //so as to use them individually (& like an array)
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

// ---------------------------------------------------------------------------
// document.getElementsByTagName
let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";

// convert HTML Collection into array
lis = Array.from(lis);

lis.reverse(); //without the above command it would show error

lis.forEach(function(li, index) {
  console.log(li.className); //shows all classnames
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// ------------------------------------------------------------------------
// document.querySelectorAll -> pretty much like above 2 except it returns what are known as node list and there are some differences.... a node list actually counts not just elements but things like text nodes, it also allows us to do things like forEach and some other array methods WITHOUT HAVING TO CONVERT
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(item, index) {
  item.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
