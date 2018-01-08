'use strict' // gives you access to some of the ES6 operators/strict typing

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };
  complete() {
    console.log('Completing Task');
    this.completed = true;
  };
  save() {
    console.log('saving Task: ' + this.name);
  };
}

// Task.prototype.complete = function () {
//   console.log('Completing Task');
//   this.completed = true;
// }
// Task.prototype.save = function () {
//   console.log('saving Task: ' + this.name);
// }
