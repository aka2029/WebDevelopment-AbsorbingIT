// XHR Object methods & working with Test

// Ajax and xhr are more complicated than fetch
// will only work with live server

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest(); // just as we would use any constructor for an object

  // OPEN - one of the methods/properties - get is to read the file, then comes file name and true is for it being Asyncronous
  xhr.open("GET", "data.txt", true);

  // console.log("READYSTATE", xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function() {
    // here we'll do what ever we need to do with the data that we get - this is pretty new before this we had to check using .onreadystatechange as shown below in the comment. in this its already at ready state directly from 1 to 4

    console.log("READYSTATE", xhr.readyState);

    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`; //this lead to no page refresh, nothing like that ... all happended behind the scene
    }
  };

  /*

  xhr.onreadystatechange = function() {
    console.log("READYSTATE", xhr.readyState);

    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  };

  */

  // only run if something goes wrong
  xhr.onerror = function() {
    console.log("Request error...");
  };

  xhr.send();

  // readyState Values
  //     0: request not initialized
  //     1: sever connection established
  //     2: request received
  //     3: processing request
  //     4: request finished and response is ready

  // HTTP Statuses - these are not all but the common ones
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

/*  --------------------------------------------------------------
  
html page used with (data.txt)

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
    <div class="container">
      <button id="button">Get Data</button>
      <br /><br />
      <div id="output"></div>
    </div>

    <script src="01_app.js"></script>
  </body>
</html>


 */
