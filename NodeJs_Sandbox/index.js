/*
console.log("Hello From Node.js...");

// calling person
const person = require("./person");
console.log(person.name);

// calling class Person
const Person = require("./person");
const person1 = new Person("Akash Sharma", 21);
person1.greeting();

// -- example of event_demo.js
const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called Listener:", data));

logger.log("Hello World");
logger.log("Hello");
logger.log("World");
logger.log("Hello-World");
*/

// Imp to know how to do this stuff without express -  NOW, HERE WE'RE GOING TO PUT TOGETHER EVERYTHING that we've learnt till now
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  /* --------But this isn't the efficient method------------
  if (request.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
      }
    );
  }

  // if (request.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       response.writeHead(200, { "Content-Type": "text/html" });
  //       response.end(content);
  //     }
  //   );
  // }

  // To be like rest api
  if (request.url === "/api/users") {
    const users = [
      { name: "Akash Sharma", age: 21 },
      { name: "Mike Tyson", age: 30 }
    ];
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  }
*/

  // Build file path (dynamic)
  let filePath = path.join(
    __dirname,
    "public",
    request.url === "/" ? "index.html" : request.url
  );

  // console.log(filePath);
  // response.end();

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
