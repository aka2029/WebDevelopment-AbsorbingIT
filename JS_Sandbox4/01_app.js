// XHR Object methods & working with Test
// Ajax and xhr are more complicated than fetch

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest(); // just as we would use any constructor for an object

  // OPEN - one of the methods/properties
  xhr.open("GET", "data.txt", true);

  xhr.onload = function() {
    // here we'll do what ever we need to do with the data that we get
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  xhr.send();

  // HTTP Statuses - these are not all but the common ones
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
