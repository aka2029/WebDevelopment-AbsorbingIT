// ES6 SETS - list or set of unique values of anytype whether its primitive or reference. And its always unique so you can't have the same one twice. Also remember sets are not key , value pairs ... they are just values

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
set1.add(100); //didn't add it again

// const set2 = new Set([1, true, "string"]); //can also be done like this
// console.log(set2);

/*
 */
console.log(set1);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100)); //returns true
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "John" })); // What?? says false - that's bec its a reference obj, its not a primitive that's actually stored in the stack

console.log({ name: "John" } === { name: "john" }); //false bec of same above reason

// Delete from the set
set1.delete(100);

console.log(set1);

// Iterate through sets
// For...of
for (let item of set1) {
  console.log(item);
}

// ForEach loop
set1.forEach(value => {
  console.log(value);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
