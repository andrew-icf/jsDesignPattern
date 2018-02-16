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
//       REST OPERATOR
var showCategories = function(productId, ...categories) {
  console.log(categories instanceof Array); // returns true
  console.log(categories); // returns ['search', 'advertising']
};
showCategories(123, 'search', 'advertising'); // categories is set to an array with 'search' and 'advertising' in it
var showCategories = function(productId, ...categories) {
  console.log(categories);
};
showCategories(123); // returns []

//       SPREAD OPERATOR
var prices = [12, 20 8];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // returns 20, so the spread operator took the array and divided it into three separate values
var maxCode = Math.max(...'43210');
console.log(maxCode); // returns 4, spread operator will also work on strings
var codeArray = ['a', ...'bcd', 'e'];
console.log(codeArray); // does not make a multi-dimensional array will return ['a', 'b', 'c', 'd', 'e'];

// OBJECT LITERAL EXTENSIONS
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
