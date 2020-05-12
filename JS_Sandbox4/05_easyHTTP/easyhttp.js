// library

function easyHTTP() {
  this.http = new XMLHttpRequest(); // previously we were doing const xhr = new ... but now we will use just http
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function() {
    // this.http is only undefined inside this function bec this pertains to the function it is inside - to fix this we use Arrow function ( part of Es6 ). To avoid arrow function for now we used let self = this; to capture this
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request
