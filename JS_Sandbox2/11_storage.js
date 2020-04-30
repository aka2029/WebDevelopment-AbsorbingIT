// LOCAL AND SESSION STORAGE

// this series i practiced on dom but had to do a small part of storage bec i'll be using it for some project, i'll persist it to local storage so, that when i close and come back the tasks are still there

// in window we have local storage api with a bunch of items like get item, set item, remove item....its very simple just set key value pairs .... just make sure that what you set as a value has to be a string. You can still save arrays, objects and stuff but turn them into string first using method called json.stringify then parse back

// Set Local Storage item -> local storage will remain after you close the browser but session storage leaves
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// Set session storage item
// sessionStorage.setItem("name", "Beth");

// remove from storage
// localStorage.removeItem("name");

// get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks; //doing this bec we're only being able to store one key, value pari

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task); //now we need to reset the local storage task with this added value

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task saved");

  e.preventDefault(); //stops default behaviour
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function(task) {
  console.log(task);
});
