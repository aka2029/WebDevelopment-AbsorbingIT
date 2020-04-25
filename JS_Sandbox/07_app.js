// ARRAYS & ARRAYS METHODS

// arrays can be mutated(ie can be modified) and iterated though & can be used in some really complex algorithms, now create some arrays...

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// get array length
val = numbers.length;
// check if is array
val = Array.isArray(numbers); //very useful while dealing with DOM
// get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3); //we're telling where we wanna start & where to end(end is included)
// Reverse
numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);

// SORTING ARRAYS
val = fruit.sort();
val = numbers.sort();

// USE THE "COMPARE FUNCTION" [HOW ????]
val = numbers.sort(function(x, y) {
  return x - y;
});

// REVERSE SORT
val = numbers.sort(function(x, y) {
  return y - x;
});

// FIND
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
