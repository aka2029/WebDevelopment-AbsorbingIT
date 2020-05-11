// DATA FROM AN EXTERNAL API - CHUCK NORRIS PROJECT

// till now we looked at text and json file but usually we'll be dealing with api's, it can be our own api. Often can be external api..... usually while building our full stack we often have our own api - REMEMBER ALL API'S ARE DIFFERENT-

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type = "number"]').value;

  const xhr = new XMLHttpRequest(); // ajax request

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // const response = this.responseText; // if we do "console.log(response);" what we'll get is json string and we want to turn into object so that we can loop through. hence we'll do this as shown below

      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

/* --------------------------------------------------------------------------------------
  html page req: 

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
    <title>Chuck Norris Joke Generator</title>
  </head>
  <body>
    <div class="container">
      <h2>Chuck Norris Jokes</h2>
      <form>
        <div>
          <label for="number">Number of jokes</label>
          <input type="number" id="number" />
        </div>
        <div>
          <button class="get-jokes">Get Jokes</button>
        </div>
      </form>

      <ul class="jokes"></ul>
    </div>

    <script src="03_app.js"></script>
  </body>
</html>

*/
