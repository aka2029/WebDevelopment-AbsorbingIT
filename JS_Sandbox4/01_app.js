// XHR Object methods & working with Test
// Ajax and xhr are more complicated than fetch
// will only work with live server

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest(); // just as we would use any constructor for an object

  // OPEN - one of the methods/properties - get is to read the file, then comes file name
  xhr.open("GET", "data.txt", true);

  xhr.onload = function() {
    // here we'll do what ever we need to do with the data that we get
    if (this.status === 200) {
      console.log(this.responseText);
    }
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
