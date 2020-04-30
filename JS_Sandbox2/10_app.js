// EVENT BUBBLING AND DELEGATIOIN

/* Event bubbling is bubbling up of events through the DOM, when an event happens it will bubble up through its parents
& Delegation is opposite of event bubbling, when we put listeners inside the parent element and use the logic inside of the event handler to target the element that we actually want */

// EVENT BUBBLING
/*
document.querySelector(".card-title").addEventListener("click", function() {
  console.log("card title");
});

document.querySelector(".card-content").addEventListener("click", function() {
  console.log("card content");
});

document.querySelector(".card").addEventListener("click", function() {
  console.log("card");
});

document.querySelector(".col").addEventListener("click", function() {
  console.log("col");
}); */

// EVENT DELEGATION - just putting the listener on a parent on what you're looking for and then putting a condition to find the target
/* without event delegation
const delItem = document.querySelector(".delete-item");

delItem.addEventListener("click", deleteItem);
*/

document.body.addEventListener("click", deleteItem);

// This is with the target specified
function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  // This is the best METHOD OR WAY OF DOING THIS
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
