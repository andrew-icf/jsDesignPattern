// Constructor Pattern - used to create new objects with their own object scope
// Prototypes - an encapsulation of properties that an object links to
var Task = function(name) {
  this.name = name;
  this.completed = false;
  // this.complete = function() {
  //   console.log('Completing Task');
  //   this.completed = true;
  // }
  // this.save = function() {
  //   console.log('saving Task: ' + this.name);
  // }
}

// ClassName.prototype.methodName = function (arguments) {};
// Now when I create a new copy of task I am NOT creating a copy of the complete function
// It exists in one place on the taskPrototype
Task.prototype.complete = function () {
  console.log('Completing Task');
  this.completed = true;
}
Task.prototype.save = function () {
  console.log('saving Task: ' + this.name);
}

var task1 = new Task('constructor demo'); // creates a new object everytime, essentially duplicating code use prototypes to link objects
var task2 = new Task('modules demo');
var task3 = new Task('singletons demo');
var task4  = new Task('prototype demo');

task1.complete();
task2.save()
task3.save()
task4.save()
