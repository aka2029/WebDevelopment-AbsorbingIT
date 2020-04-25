// Type Conversion

let val;

// Number to string
val = String(5);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// in addition to string function used above, we also have toString() method
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true); //gives 1
val = Number(false); //gives 0
val = Number(null); //gives 0
val = Number("hello"); //gives NaN i.e not a number
val = Number([1, 2, 3]);

val = parseInt("100.30"); //this method parses String to integer
val = parseFloat("100.30"); //this method parses String to decimal

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); -> we dont get length for a number, we do for string
console.log(val.toFixed(2)); // This method only works on nos. toFixed() allows us to specify decimals eg. see parseFloat

console.clear();

const val1 = "5"; //this also converted 5 into string and ans came 56
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
