// Object Creation
// var obj = {};
// var nextObj = Object.create(Object.prototype); // how we do inheritance
// var lastObj = new Object();
//
// // Assigning keys and values
// obj.param = 'new value'; // Dot notation
// obj['param'] = 'newest value'; // Bracket notation
// var val = 'value';
// obj[val] = 'bam value'; // Bracket notation with a variable
// task.toString = function() {
//   return this.title + ' ' + this.description;
// }

var task = {};
task.title = 'My Title ';
task.description = 'My Description';
Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: true, // setting this to false you will NOT be able to overwrite this property later, say to a string
  enumerable: true, // setting this to false you will NOT be able to enumerate over the key/values
  configurable: true // can configure the other two properties
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is URGENT';
  },
  writable: true, // setting this to false you will NOT be able to overwrite this property later, say to a string
  enumerable: true, // setting this to false you will NOT be able to enumerate over the key/values
  configurable: true // can configure the other two properties
});


console.log(urgentTask.toString());
