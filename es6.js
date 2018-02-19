'use strict';
var getPrice = () => 5.99; // returns 5.99 typeOf Function, you can leave off the function and return keyword
var getPrice = count => count * 4; // getPrice(2) returns 8, one input no need for parens
var getPrice = (count, tax) => count * 4.00 * (1 + tax); // gitPrice(2, .07) returns 8.56
var getPrice = (count, tax) => {
  var price = count * 4;
  price *= (1 + tax);
  return price;
}; // getPrice(2, .07) returns 8.56 same as above call but as a block instead of a complex expression

// The real purpose of arrow functions is to handle the "this" keyword
document.addEventListener('click', function() {
  console.log(this);
}); // returns document, in es5 'this' always refers to the element that receives the event
document.addEventListener('click', () => console.log(this));
// returns Global Window Object, in es6 'this' refers to the actual context of the code we are running
var getPrice = ()
  => 5.99; // returns SyntaxError: unexpected token =>, putting '=>' on a new line does not work
var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype')); // returns false, with Fat Arrow we do not have access to a prototype field

// Default Function Parameters
var getProduct = function(productId = 10, type = 'software') {
  console.log(productId + ' ' + type);
};
getProduct(undefined, 'hardware'); // returns 10 hardware, the default 10 will still be used if there is one

// Rest and Spread
//                  REST OPERATOR
var showCategories = function(productId, ...categories) {
  console.log(categories instanceof Array); // returns true
  console.log(categories); // returns ['search', 'advertising']
};
showCategories(123, 'search', 'advertising'); // categories is set to an array with 'search' and 'advertising' in it
var showCategories = function(productId, ...categories) {
  console.log(categories);
};
showCategories(123); // returns []

//                  SPREAD OPERATOR
var prices = [12, 20 8];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // returns 20, so the spread operator took the array and divided it into three separate values
var maxCode = Math.max(...'43210');
console.log(maxCode); // returns 4, spread operator will also work on strings
var codeArray = ['a', ...'bcd', 'e'];
console.log(codeArray); // does not make a multi-dimensional array will return ['a', 'b', 'c', 'd', 'e'];

//                  OBJECT LITERAL EXTENSIONS
var field = 'dynamicField';
var price = 5.99;
var ident = 'productId';
var productView = {
  price,    // shorthand for price: price
  quantity  // shorthand for quantity: quantity
  calcValue() {
    return this.price * this.quantity; // no longer needed is the function keyword, "this" is referring to the context like a Fat Arrow function
  }
  [field]: price  // {dynamicField: 5.99} we can use a variable name and an expression as a field name just be sure to use bracket notation within the object literal
  [field + '-001']: price // {dynamicField-001: 5.99} also works for a full expression, you can do this with a method as well
  get [ident] () {return true;}
  set [ident] (value) {}       // these work for getters and setters as well
};

//                For of Loop => works with iterables
var categories = ['a', 'b', 'c'];
for(var item of categories) {
  console.log(item); // returns a, b, c
}
// essentially this 'for of' loop looped through each element of categories, you can also iterate the characters in a string

//                  Octals and Binary literals in es6
var value = 0o10;
console.log(value); // returns 8, this is how we specify an octal value. Beginning with the number 0 and then the letter o(case insensitive)

var value = 0b10;
console.log(value); // returns 2, specifying a Binary value with the number 0 and the letter b

//                  Template Literals
// string template with interpolation on literals and expressions
let invoiceNum = '1450';
console.log(`Invoice number: ${invoiceNum}`);
console.log(`Invoice number: ${'Inv-' + invoiceNum}`); // returns Invoice number: Inv-1450 (expression)
// If calling this in a function the interpolation will take place first so be careful as to the scope of the variable that you think you're setting

// a tagged template literal
function processInvoice(segments){
  console.log(segments);
}
processInvoice `template`; // returns an array ["template"] this is how we can create a function to handle a template

//                  DESTRUCTORING (taking apart the structure of something)

// Ex: removing the individual indexes or elements in an array or an object where we can destructor or take out individual fields and re assign them
let salary = [20, 45, 1345];
let [low, average, high ] = salary;
console.log(average); // returns 45. The elements in the array were assigned to the variables

let salary = [20, 45];
let [low, average, high ] = salary;
console.log(high); // returns undefined, no third element you can skip elements by adding an extra comma[low, , high]
let [low, ...remaining]; // returns whatever is after the first element in an array
// can use a default as well [low, average, high = 8000];
// nested values in a multi-dimensional Array
let [low, average, [actualLow, actaulHigh]];
// as a function
function reviewSalary([low, average], high = '80') {
  console.log(average);
}
reviewSalary(['4', '6']); // returns 6

//  FOR AN OBJECT
let salary = {
  low: '34',
  average: '87',
  high: '999'
}
let {low, average, high} = salary;
console.log(high); // returns 999, properties need to match up between the object and our new variables
let { low: newLow } = salary; // we can re-asign the property to a new name by doing it like this

for(let [a, b] of [[5, 10]]) {
  console.log(`${a} ${b}`); // returns 5 10, destructoring works in a for of loop as well
}
