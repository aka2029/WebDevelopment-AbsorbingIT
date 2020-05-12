// Async & Await - part of Es7 or Es2016 standard but is fully implemented in chrome, but not sure about others. if using it in industry project then compile it down to Es5 or Es6

/*

// A normal function
function myFunc() {
  return "Hello";
}

console.log(myFunc());

// Just adding a async in front of this makes it a promise
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  
  const error = false; // when true then shows error
  
  if (!error) {
    const res = await promise; // wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));

*/

// Eg. USING FETCH() - which is by the way the best wasy to use them
async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceed once its resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
