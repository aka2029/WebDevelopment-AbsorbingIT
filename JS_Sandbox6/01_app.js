// Iterators & Generators - iterators are like advanced loops that can be paused and generators are like advanced loops that can be paused and can return multiple value

// READ THIS : https://medium.com/@madasamy/explanation-about-iterators-and-generators-in-javascript-es6-f7e669cbe96e

/*
 */
// Iterator Example - has next & done, we use done: false when we are not done iterating through the loop
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// Create an array of names
const namesArray = ["Jack", "Jill", "John"];
// Init iterator and pass in the names array
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value); //see this is iterating through the loop
console.log(names.next().value);

// Generator Examples - the * tells js that it's generator
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();

console.log(name.next());

// ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
