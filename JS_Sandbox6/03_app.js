// SYMBOLS IN Es6 - the imp thing about symbols is that each and every one of them is very unique. This makes them very valuable in terms of obj prop identifier. this is the main purpose of symbols is their uniqueness.

// READ THIS : "http://www.zsoltnagy.eu/es6-symbols-and-its-use-cases/"

/*
 */
// Create a symbol : symbol is not a constructor, it's an actual primitive value so, cannt write it like "new Symbol()"
const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(sym2);
console.log(typeof sym2); //this shows its pure primitive type

console.log(Symbol() == Symbol()); //2 symbols can never be the same even if we try adding the same identifier
console.log(`Hello ${sym1.toString()}`); //or do it like this ${String(sym1)}

// Unique Object Keys - THE MAIN REASON FOR HAVING SYMBOLS
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are igonore by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" })); //blank - ignored
