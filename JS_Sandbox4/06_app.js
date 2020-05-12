// Promises - are part of Es6 standard. alternate way of handling async operations. Called so because while they are handling Async operations they can promise to do something when the operatioin is finished. We handle a promise response with .then

// Edited the 04_app.js to use promises insted of callback

// The fetchApi is the new standard to make HTTP Request hence promises are important

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false; //if true then in console "Something went wrong"

      if (!error) {
        resolve(); //we resolve() instead of callback
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";

    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
