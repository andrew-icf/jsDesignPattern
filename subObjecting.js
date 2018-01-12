// Sub-classing (so to speak)
var Repo = require('./taskRepo');
var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('Completing Task');
  this.completed = true;
}
Task.prototype.save = function () {
  console.log('saving Task: ' + this.name);
  Repo.save(this);
}


var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype); // creates a new instance of Task's prototype without affecting Task, true inheritance

UrgentTask.prototype.notify = function() {
  console.log('notify more stuff');
};

UrgentTask.prototype.save = function() {
  this.notify();
  console.log('stuff before saving');
  Task.prototype.save.call(this);
};

var ut = new UrgentTask('this is urgent', 1);
ut.complete();
console.log(ut);
