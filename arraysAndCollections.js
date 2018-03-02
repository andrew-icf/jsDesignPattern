'use strict';
let salaries = Array(9000);
console.log(salaries.length); // returns 9000 (es5)
let salaries = Array.of(9000); // creates an array with just that value
console.log(salaries.length); // returns one (es6)
let amounts = [8, 9, 10];
let salaries = Array.from(amounts, function(v) { return v + this.adj}, {adj: 100}); // Array.from creates a new array with it manipulated with the lambda function
console.log(salaries); // [108, 109, 110]
// There is a thrid parameter in Array.from that represents an object that will become 'this' within the Fn
// ******** Arrow Functions will not let you changed the 'this' keyword ******** V => v + this.adj will not work above (NaN)
amounts.fill(11); // returns [11, 11, 11] fill is a new function that extends the array object - IT WILL fill the entire array with that one value
amounts.fill(11, 1); // [8, 11, 11] the second param represents where you want to start filling
amounts.fill(11, 1, 2); // [8, 11, 9] the third param represents an index to stop at that's not inclusive of the index
amounts.fill(11, -1); // [8, 9, 11] start counting from the end of the array
amounts.find(value => value >= 9.5); // 10, find will scan the whole array calling the function on each element, as soon as it finds something in the array it returns immediately
let result = amounts.findIndex(function (value, index, array) {
  return value == this;
}, 10); // 10 is now equal to this and when we log this 2 will be returned(the index that 10 is in)
amounts.copyWithin(2, 0); // copies data within the array the first arguement refers to the desination index and the second arguement is the source index(what is being copied)
amounts.copyWithin(2, 0, 2); // the third value is how many values we want to copy [8, 9, 8, 9]
let ids = ['a', 'b', 'c'];
console.log(...ids.entries()); // we get the entries of the array [ 0, 'a'], [1, 'b'], [2, 'c']
console.log(...ids.keys()); // 0 1 2
console.log(...ids.values()); // a b c


//                  ArrayBuffers and Typed Arrays(Integers and Floats)
let buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength); // 1024

// You can use bracket notaion on array buffers just like a regular Array
buffer[0] = 0xff; // hexidecimal ff is 255 in decimal
console.log(buffer[0]); // 255

// Typed Arrays
// Each one of these types gets passed in an array buffer, the array of actual bites that hold the values
// 8 bit integers
Int8Array() // signed
Uint8Array() // un-signed
Uint8ClampedArray() // un-signed, if we set a high value it will get clamped to 255 low will get clamped to 0
// 32 bit integers
Int32Array() // signed
Uint32Array() // un-signed
// 16 bit integers
Int16Array() // signed
Uint16Array() // un-signed
// Float
Float32Array()
Float64Array()

let buffer = new ArrayBuffer(1024);
let a = new Int8Array(buffer); // a signed integer, working with 8 bit integers with buffer being passed in
a[0] = 0xff; // hexidecimal ff
console.log(a[0]); // -1, signed or un-signed will determine weather this is -1 or 255 for un-signed

//                  Endianness
// Big Endian / Little Endian (most computer systems and browsers work in Little Endian by default)
// (using dataViews they use Big Endian by default)
// we use the dataview obj to handle Endianness
let buffer = new ArrayBuffer(1024);
let dv = new DataView(buffer);
console.log(dv.byteLength); // 1024, the dataview takes on the characteristic of the array buffer, in this case the size

//                Map and WeakMap
// WeakMap's will be cleaned up when the JS Engine does Garbage Collection
let emp1 = { name: 'Jake'}
let emp2 = { name: 'Jane'}

let employees = new Map();
employees.set(emp1, 'ABC');
employees.set(emp2, '123');
console.log(employees.get(emp1)); // ABC, they map is keyed off of these objects and the value is ABC
employees.size // 2, this is how you access the size of a map
employees.delete // 1
employees.clear // 0, clears entire map
// if working with a map you can create an iterable(array) and pass that to your Map
employees.has(emp2); // true, will tell us that key exists
...employees.values() // ignores the keys and gives us values
...employees.entries() // we get the original array back

emp1 = null; // opens this up for Garbage Collection, WeakMap is gone, no reference so will return undefined

//              Set and WeakSet
let perks = new Set();
perks.add('Car');
perks.add('Vacation');
console.log(perks.size); // 2
// A Set guarentees that it's items are unique, if you tried to add another 'Car', it would not add it
// The constructor for Set can take an iterator, like an array let perks = new Set([1, 2, 3]);
perks.has('Car'); // true
perks.keys();
perks.values();
perks.entries();

//              Subclassing (extending these objects )
// we can subclass arrays, regexp, functions, promises, boolean, number, sting, map, and set
// ***** Currently there are no compilers or polyfils that support Subclassing ***** EDGE works but not Babel,Typescript etc
class Perks extends Array {

}
let a = Perks.from([5, 10, 15]); // the from method comes directly from array
console.log(a instanceof Perks); // true
console.log(a.length); // 3, we have access to what Array provides
