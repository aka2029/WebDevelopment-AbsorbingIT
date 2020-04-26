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

// DO WHILE -> its always gonna run no matter what
let j = 0;
do {
  console.log("Number " + j);
  j++;
} while (j < 10);

// --------------------------------------------------------

console.clear();

// Arrays have looping method that are suggested over for loop or something
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// LOOP THROUGH ARRAY
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.clear();

// FOR EACH ARRAY LOOP  - this is suggested if you're trying through an array for some reason
cars.forEach(function(car) {
  console.log(car);
});

cars.forEach(function(car, index) {
  console.log(`${index} : ${car}`);
});

cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

console.clear();

// ---------------------------------------------------------

// MAP -> used to return something different so, to return a different array
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" },
  { id: 4, name: "Steve" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// --------------------------------------------------------

// FOR IN LOOP
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
