// IF STATEMENTS & COMPARISON OPERATOR

/* if(something) {
    do something
  } else {
    do something else
  }
*/

const id = 100; //assigning

// EQUAL TO
if (id == 100) {
  //comparing
  console.log("correct");
} else {
  console.log("incorrect");
}

// Not Equal To
if (id != 101) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// EQUAL TO value & type
if (id === 100) {
  //so, while assigning if we have string then here it should also be string
  console.log("correct");
} else {
  console.log("incorrect");
}

// NOT-EQUAL TO value & type
if (id !== 100) {
  //so, while assigning if we have string then here it should also be string
  console.log("correct");
} else {
  console.log("incorrect");
}

console.clear();

// Test if undefined
if (typeof id != "undefined") {
  //used typeof to see if id is undefined
  console.log(`The ID is ${id}`);
} else {
  console.log("NO ID");
}

console.clear();
