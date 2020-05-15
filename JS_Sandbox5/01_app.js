// ERROR HANDLING & REGULAR EXPRESSIONS

// try catch block - the good thing about this is that we can handle the error without stopping the entire script ( can be said that this, is a very elegant way of handling error )

const user = { email: "jdoe@gmail.com" };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('"Hello World"'); // like this it's a string
  // eval('Hello World'); // this is syntax error, it sees 'Hello as a variable

  // Will Produce a URIError - read about this I'didn't understand this
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name"; //just throws a string
    throw new SyntaxError("User has no name");
  }
} catch (error) {
  // console.log("There's an error stupid!"); // custom message

  console.log(error);

  // console.log(error.message); // this will show same message as the previous line but will remove the error name(can be used to show on screen)

  // console.log(error.name); // this will just give the error name

  // console.log(error instanceof TypeError); // to check or test to see that it matches or not
} finally {
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
