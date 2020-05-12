// CALLBACK FUNCTIONS (the prev vid was on REST api & HTTP Requests) - we've already dealt with call backs quite a bit, a callback is a function that is simply passed in a parameter to another function and is then ran inside the function body

// but we havent see behind the seens

// in easiest way callbacks are just a function that can be passed in to another function & then called within that function

const posts = [
  // this will mimic database/server
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

/* This commented part - we're doing the work in Synchronous way

function createPost(post) {
  setTimeout(function() {
    //to mimic server response time (settimeout is taking a callback itself)
    posts.push(post);
  }, 2000);
}

function getPosts() {
  //to get our post and display inside our browser
  setTimeout(function() {
    let output = "";

    posts.forEach(function(post) {
      //forEach is also taking a callback
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" });

getPosts();

*/

// Now we'll do this in Async way using callbacks

function createPost(post, callback) {
  setTimeout(function() {
    //to mimic server response time (settimeout is taking a callback itself)
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  //to get our post and display inside our browser
  setTimeout(function() {
    let output = "";

    posts.forEach(function(post) {
      //forEach is also taking a callback
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Now since it calls getPosts function before createPost func ends so, then it takes 2 seconds to display
createPost({ title: "Post Three", body: "This is post three" }, getPosts);

/* Html page: --------------------------------------------------

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- skeleton cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
      integrity="sha256-ECB9bbROLGm8wOoEbHcHRxlHgzGqYpDtNTgDTyDz0wg="
      crossorigin="anonymous"
    />
    <title>Ajax Sandbox</title>
  </head>
  <body>
    <script src="04_app.js"></script>
  </body>
</html>

*/
