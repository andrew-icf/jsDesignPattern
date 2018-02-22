//                  Symbols
// A symbol is a unique and immutable data type and can be used as an identifier for object properties
// The main way they are used now are to add properties to classes
// The purpose of a Symbol is to generate a unique identifier, but the trick is we never get access to that identifier as developers
// theres just no way to inspect it to see what the identifier is we just know that it's going to be unique
let eventSymbol = Symbol('resize event'); // this string is mainly used for debugging purposes. A new Symbol is going to be created and assigned to eventSymbol
console.log(typeof eventSymbol); // returns symbol (a new type in es6)

// One way to use Symbol's is to set a unique identifier for a const variable
const CALC_SYMBOL = Symbol('calculate event') ;
Symbol.for('event'); // built in registry that we can access with Symbol.for() and pass them a string
// we can test for equality by assigning Symbol.for() to variables(let in this case) and then comparing
// we can use a property on an object
let article = {
  title: 'Mountain',
  [Symbol.for('article')]: 'My article'
};

let value = article[Symbol.for('article')];
console.log(value);  // My article

Object.getOwnPropertyNames(article); // will not show Symbols
Object.getOwnPropertySymbols(article); // new static method for es6 => which will show properties that are symbols

//              Symbols used for meta-programing (Well known Symbols) check mdn for usage
Symbol.toStringTag // for strings
Symbol.isConcatSpreadable // for concatenating
Symbol.toPrimitive // accepts a function with a hint parameter as to how to convert this to a primitive value

//              NEW Object Extensions
let a = {
  x: 1
};
let b ={
  y: 2
};
let target = {};
Object.setPrototypeOf(a, b); // will take the a object and assign it's prototype to be b
Object.assign(target, a, b); // will populate a target with all of the other properties of a and b, if like properties b will overwrite a's properties
// if you are creating your own properties and set enumerable to false it will not be 'assigned'
// Object.assign will call directly on the properties it will NOT go up the prototype chain at all
let amount = NaN;
console.log(Object.is(amount, amount)); // very simular to amount === amount, this is a better way for comparison
Object.getOwnPropertySymbols()

//              NEW String Extensions
let title = 'Santa Claus';
console.log(title.startsWith('Santa')); // returns true, there is also
title.endsWith('aus');
title.includes('ta');
// astral plane values through unicode characters are mostly used for emoji's and advanced math symbols "Surfer's \u{1f3c4} Blog"
// we can still work with a string of unicode characters if parsed into an Array ex: Array.from(assigned string variable).length
title.normalize().length // a new function we can call on a string instance to get the length correct
title.normalize().codePointAt(7).toString(16); // prints it out with base 16
title.normalize().fromCodePoint(0xf3c4); // sets a string from a hex value => here we get the emoji surfer
String.raw`${title} \u{1f3c4}\n` // new function, used here as a template tag, it will do the interpolation but will print raw the unicode
title.repeat(10); // will create 10 titles back to back 
