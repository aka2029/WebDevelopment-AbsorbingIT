// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

/*
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c); -> this isn't gonna affect the a
}

test(); // this is req to run the above function
*/

/*
if (true) {
  //block scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If Scope: ", a, b, c); //this changes a but not b & c
}
*/

for (let a = 0; a < 10; a++) {
  //we using let here so globally 1 stayed as 1..if we would have used let then it would hve become 10+
  console.log(`Loop: ${a}`);
}

console.log("Global Scope: ", a, b, c);
