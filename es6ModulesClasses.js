console.log('HI');
// import statements get hoisted and dependencies will execute first
import someValue from 'base.js'; // no brackets and this will import the default export
import * as values from 'base.js'
console.log(values); // => {id: 9, name: thingy} values is the alias for the elements being exported
// base.js
var projectName = 'Hope';
export default projectName; // <= a module can have one default export
let id = 9;
let name = 'thingy';
export {id, name};

//                CLASSES
class Task {}
console.log(typeof Task); // returns Function, you can think of a class as being somewhat of a constructor function
let task = new Task();
console.log(typeof task); // returns Object as an instantiated task

let newClass = class Task { // we can assign classes to variables and use them in expressions
  let id = 98; // SyntaxError, the Class body is not a place to declare variables
  constructor() {
    console.log('This will happen when instantiated'); // <= seriously...
  }
  showId() { console.log('99');}
}
let task = new Task();
console.log(task.showId === Task.prototype.showId); // true adding a method to a class is simular to adding that method to the prototype object

// *** Classes are NOT hoisted
// *** We can't call the .call() function in order to change the 'this' object
// *** by creating a class we are NOT poluting the global namespace, like we would if we used a constructor function

class Project {
  constructor() {
    console.log('cant type today');
  }
}
class AnotherProj extends Project {
  constructor() {
    // super(); = ReferenceError: this is not defined, if AnotherProj is going to have a constructor it needs to call super()
    console.log('still cant');
  }
}
let p = new AnotherProj(); // returns cant type today /n still cant super is going up the prototype object and calling it's parent

//                  Classes with methods
class Project {
  getTaskCount() {
    return 50;
  }
}
class AnotherProject {
  getTaskCount(){
    return 6;
    // return super.getTaskCount() + 6; // returns 56. The JS engine will look up the prototype chain for a getTaskCount
  }
}
let p = new AnotherProject();
console.log(p.getTaskCount()); // returns 6 since it is overwritten

//                Using Super with an Object Literal
let project = {
  getTaskCount() { return 50;}
}
let otherProject = {
  getTaskCount() { return super.getTaskCount() + 7;}
}
Object.setPrototypeOf(otherProject, project);
console.log(otherProject.getTaskCount()); // returns 57, using super in an object literal is valid you just need to make sure that your prototype is set up right

class Proj {
  constructor() { let location = 'Denver'} // returns undefined, using let, const or var it goes out of scope very quickly and will not be attached to an instance
}        //use this.location = 'Denver' to attach to this instance

class Project {
  static getDefaultId() { // you can only create static methods, not properties. We can still create static properties like in es5 ex: Project.id = 99; outside of the code block
    return 0;
  }
}
console.log(Project.getDefaultId()); // returns 0, so by declaring a static method, the method gets attached directly to Project
// if you instantiate a new object
let p = new Project(); // Error: Object doesn't support property or method, when creating static methods they are attached to the class

//                  new.target
// new has a new property now named target, which is mainly used in a constructor. typeof is function
// new.target will always point to the initial constructor that got called
// The new.target property lets you detect whether a function or constructor was called using the new operator
