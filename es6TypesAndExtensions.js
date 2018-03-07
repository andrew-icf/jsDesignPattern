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

//                NEW Object Extensions
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

//                NEW String Extensions
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

//                NEW Number Extensions
// Use Number.parseInt rather than just parseInt, the same with parseFloat use Number.parseFLoat
let s = 'NaN';
console.log(isNaN(s)); // es5 returns ture the global function converts the string in to a real NaN
console.log(Number.isNaN(s)); // es6 returns false because it's a string

let s = '8000';
console.log(isFinite(s)); // true, global function converts it to a number
console.log(Number.isFinite(s)); // false, it's a string not a number
Number.isInteger() // will return false on any float/decimal
Number.isSafeInteger() // an integer that can be accurately represented using floating point notation
Math.pow(2, 53) -1; // Math.power 2 to the 53rd power minus one is the highest number you can have with .isSafeInteger()
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

//                  NEW Math Extensions
// Hyperbolic Functions
cosh() // cosign
tanh() // tangent
sinh() // sign
acosh(), asinh(), atanh(), hypot()

// Arithmetic Functions
cbrt() // Cube root
clz32() // count leading zeros (32 bit integers)
expm1() // equal to exp(x) - 1
log2() // log base 2
log10() // log base 10
log1p() // equal to log(x+1)
imul() // 32 bit integer multiplication

// Miscellaneous Functions
sign() // the numbers sign: 1, -1, 0, -0, NaN
trunc() // the integer part of a number
fround() // round to nearest 32 bit floating-point value

//                  NEW RegExp Extensions
let pattern = /\u{1f3c4}/u; // the last 'u' is a flag for unicode
console.log(pattern.test('🏄'));

let pattern = /900/y // the y flag performs the search from the last index and the last index only
console.log(pattern.lastIndex);
let pattern = /900/yg
console.log(pattern.flags); // returns gy, tells us what flags were set for that regular expression in this order 'gimuy'

//                  NEW Function Extensions
let fn = function calc() {return;}
console.log(fn.name); // returns calc
// if the function is annonymous .name will spit back the variable as the name
// fn.name is not writeable but it is configurable through Object.defineProperty()
