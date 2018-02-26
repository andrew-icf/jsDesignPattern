'use strict';
// Array's now have a special property and are accessed with bracket notation because the property name is actually a symbol
let ids = [9, 8, 7];
console.log(typeof ids[Symbol.iterator]); // one of the main functions of Symbols (adding properties to classes while guarenteeing that the property name is unique)
// this special property is a funciton

let iter = ids[Symbol.iterator](); // <= calling the function
console.log(iter.next()); // the main function called on iterators is next()
// returns a special object {done: false, value: 9} done means that we haven't exhausted the iterator yet and value is the first Id
iter.next(); // 9
iter.next(); // 8
console.log(iter.next()); // returns {done: false, value: 7}
// when the iterator has been exhausted it will return {done: true, value: undefined}

//   Making our own iterators
let idMaker = {
  [Symbol.iterator]() {
    let nextId = 8;
    return { // this is going to be the iterator itself
      next() {
        return {
          value: nextId++,
          done: false
        };
      }
    };
  }
};
let iter = idMaker[Symbol.iterator]();
console.log(iter.next().value); // returns 8
console.log(iter.next().value); // returns 9

// Using an iterator in a for of loop
for(let v of idMaker) {
  if (v > 10) break;
  console.log(v); // 8,9,10
}

// Spread operator
let ids = [1, 2, 3];
function process(id1, id2, id3) {
  console.log(id3);
}
process(...ids);

//                  GENERATORS
function *process(){
  yield 8;
  yield 9;
}
let it = process(); // when we run this it starts out as an iterator
console.log(it.next()); // the generator completes the same way an iterator does
// to kick off the generator we need to call it.next(); and then the generator will immediately yield
it.next(200); // pass this value into yield when yield is set to a variable
// ************** MOST GENERATORS WILL NOT HAVE HARDCODED VALUES *************

// yielding an array
function *process() {
  yield 42;
  yield* [1,2,3]; // This is called iterator delegation, temporarily replaces process() delegating another iterator to the generator
}
let it = process();
console.log(it.next().value); // 42
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
console.log(it.next().value); // undefined
it.return('foo'); // will stop the iterator and return the value passed in (currently working in firefox nothing else)

//                PROMISES
let p1 = new Promise(...);
let p2 = new Promise(...);

Promise.race([p1, p2]).then(
  function(value) { console.log('yup');}
  function(reason) { console.log('nope');}
);
// .race will return the FIRST one that resolves, a race to complete first no matter rejected or resolved
