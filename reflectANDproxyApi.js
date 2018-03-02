'use strict';
// Reflect is a built-in object that provides methods for interceptable JavaScript operations.
// The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.
console.log(typeof Reflect); // object, we can use this like we use Math
Reflect.construct(target, arguementList[, newTarget]); // target is the function we want to construct, arguementList is the
// array of arguements to pass to the constructor and we can pass in an optional newTarget

class Bar {
  constuctor(name,city) {
    console.log(`${name} in ${city}`);
  }
}
let b = Reflect.construct(Bar); // similar way to calling let b = new Bar
let b = Reflect.construct(Bar, ["Joe's", 'Denver']); // Joe's in Denver

Reflect.apply(target, thisArguement, arguementList); // invokes a method, the arguementList is what will be passed in to our
// function
class Bar {
  constructor() {
    this.id = 33;
  }
  show() {
    console.log(this.id);
  }
}
Reflect.apply(Bar.prototype.show, {id: 99}); // 99, with this case the 'this' obj is set to 99
// .apply() is very low level so that we don't need to instantiate an object

Reflect.getPrototypeOf(target); // target is the object or funtion we want to get the prototype of
Reflect.setPrototypeOf(target, prototype);

// ***** Remember when we are working with Classes the constructor is actually the prototype *****

Reflect.get(target, propertyKey[, receiver]); // receiver is optional, use when you have a getter and will be the value of 'this'
Reflect.set(target, propertyKey, value[, receiver]); // receiver is optional, use when you have a setter and set 'this'
Reflect.has(target, propertyKey); // boolean return
Reflect.ownKeys(target); // will return an array of all the properties on the target
Reflect.defineProperty(target, propertyKey, attributes); // look up Object.defineProperty
Reflect.deleteProperty(target, propertyKey); // deletes the property we want to delete
Reflect.getOwnPropertyDescriptor(target, propertyKey); // we get the descriptor Object
Reflect.preventExtensions(target); // preventing us from adding new properties to an object
Reflect.isExtensible(target); // boolean return


//                HEY THIS IS CALLED THE DESCRIPTOR OBJECT ************

descriptorObject = {
  configurable: true,
  enumerable: true,
  value: 3,
  writable: true
}

//                  PROXY API
// An object that wraps another object or function and with the proxy we can monitor access to that function or object that's being wrapped
// We can use this for security, profiling for logging or some kind of security logging system and many more usecases to come

// Available Traps
handler.construct();
handler.apply();
handler.getPrototypeOf();
handler.setPrototypeOf();
handler.get();
handler.set();
handler.has();
handler.ownKeys();
handler.defineProperty();
handler.deleteProperty();
handler.getOwnPropertyDescriptor();
handler.preventExtensions();
handler.isExtensible();

// Untrappable Object Usage

// Comparisons ( == and === )
// typeof and instanceof
// Operations ( target + " ")
// String( target )
// BUT THE VAST MAJORITY WILL BE COVERED

// Trapping with a get()
function Employee () {
  this.name = 'Paul';
  this.salary = 0;
}

var e = new Employee();
var p = new Proxy(e, {
  get: function (target, prop, receiver) {
    // this is where we put our validation logic ex: if(prop === 'salary')
    return Reflect.get(target, prop, receiver); // returns 0, it goes through the proxy to the value
    // return 'Attempted acces: ' + prop;     returns Attempted access: salary
  }
});

//                  PROXY

function Employee () {
  this.name = 'Paul';
  this.salary = 0;
}
var e = new Employee();
var p = new Proxy(e, {
  get: function (target, prop, receiver) {
    // this is where we can do some security logic ex: if(prop === 'salary')
    return Reflect.get(target, prop, receiver); // log's 0, goes through Reflect.get and get's through that call to the target obj
  }
});

// If data changes or security levels change we need to be able to REVOKE a Proxy
//                  REVOCABLE PROXIES
var t = {
  tableId: 99
}

Proxy.revocable();
let { proxy, revoke } = Proxy.revocable(t, {
  get: function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver) + 100;
  }
});
console.log(proxy.tableId); // 199
revoke();
console.log(proxy.tableId); // Property size doesnt exist 
