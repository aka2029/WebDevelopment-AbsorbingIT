// 6th File

const http = require("http");

// Create server object
http
  .createServer((request, response) => {
    // Write a response
    response.write("Hello World");
    response.end();
  })
  .listen(5000, () => console.log("Server running..."));
//  now just go to the browser any type "localhost:5000"
