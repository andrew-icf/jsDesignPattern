// Constructor Pattern - used to create new objects with their own object scope
// Prototypes - an encapsulation of properties that an object links to
var Repo = require('./taskRepo');
var Task = function(data) {
  this.name = data.name;
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
  Repo.save(this);
}

// module.exports = Task;
var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notify me');
}

urgentTask.complete();
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};

urgentTask.save();
