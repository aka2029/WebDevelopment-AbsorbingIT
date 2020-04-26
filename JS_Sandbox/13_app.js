// LOOPS & ITERATIONS

// FOR LOOP
for (let i = 0; i < 10; i++) {
  //use var or let in for loop
  // console.log(i);
  // console.log("Number " + i);
  if (i === 2) {
    console.log("2 is my fav number");
    continue; //it will skip this iteration here, and start with new
  }

  if (i == 5) {
    break; //stops the iteration here
  }

  console.log("Number " + i);
}

console.clear();

// --------------------------------------------------------

// WHILE LOOP
let i = 0;
while (i < 10) {
  console.log("Number " + i);
  i++;
}

console.clear();

// --------------------------------------------------------

// DO WHILE
let j = 0;
do {
  console.log("Number " + j);
  j++;
} while (j < 10);
