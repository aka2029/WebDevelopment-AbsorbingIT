// THE FETCH API - is the new standard to make HTTP Request hence promises are important

// Fetch is now part of the window object. Now we'll be recreating the easyHTTP library that we created using fetch and using some updated standards from Es6. Instead of using prototypes, using classes, using promises, Arrow functions, etc

document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// Get local text file
function getText(e) {
  // remember fetch returns promises so, have to use .then
  fetch("test.txt")
    .then(function(res) {
      // console.log(res.text()); // checked proto in that say text prop so used it, and when put this command it gave us promise. And we know to get a response from a promise we use .then

      return res.text(); // now its a promise
    })

    .then(function(data) {
      // since we got our pormise so, we're using this .then to do what we want to do with our pormise.
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })

    .catch(function(err) {
      //for catching some error if exists eg. test1.txt
      console.log(err);
    });

  e.preventDefault();
}

// Get local json data
function getJson(e) {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })

    .then(function(data) {
      console.log(data);
      let output = "";

      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })

    .catch(function(err) {
      console.log(err);
    });

  e.preventDefault();
}

// Get from external API
function getExternal(e) {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })

    .then(function(data) {
      console.log(data);

      let output = "";

      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })

    .catch(function(err) {
      console.log(err);
    });

  e.preventDefault();
}
