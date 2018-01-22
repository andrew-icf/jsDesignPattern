var Task = require('./task');

// Observers
var notificationService = function() {
  var message = 'Notifying ';
  this.update = function(task){
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var loggingService = function() {
  var message = 'Logging ';
  this.update = function(task){
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var auditingService = function() {
  var message = 'Auditing ';
  this.update = function(task){
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var task1 = new Task({name: 'create a demo for constructors', user: 'Andrew'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();


task1.complete();


// ************************ Observer Pattern ************************

// function ObserverList() {
//   this.observerList = [];
// };
// ObserverList.prototype.add = function(obj) {
//   return this.observerList.push(obj);
// };
//
// ObserverList.prototype.get = function(index) {
//   if (index > -1 && index < this.observerList.length) {
//     return this.observerList[ index ];
//   }
// };
//
// ObserverList.prototype.count = function () {
//   return this.observerList.length;
// };
//
// ObserverList.prototype.removeAt = function ( index ) {
//   this.observerList.splice(index, 1);
// };
//
// ObserverList.prototype.indexOf = function(obj, startIndex) {
//   var i = startIndex;
//   while (i < this.observerList.length) {
//     if (this.observerList[i] === obj) {
//       return i;
//     }
//     i++;
//   }
//   return -1;
// };
//
// var ObservableTask = function(data){
//   Task.call(this, data);
//   this.observers = new ObserverList();
// }
//
// ObservableTask.prototype.addObserver = function( observer ) {
//   this.observers.add(observer);
// }
//
// ObservableTask.prototype.removeObserver = function(observer) {
//   this.observers.removeAt( this.observers.indexOf(observer, 0));
// }
//
// ObservableTask.prototype.notify = function ( context ) {
//   var observerCount = this.observers.count();
//
//   for (var i = 0; i < observerCount; i++) {
//     this.observers.get(i)(context);
//   }
//
// }
//
// ObservableTask.prototype.save = function() {
//   this.notify(this);
//   Task.prototype.save.call(this);
// }
//
// var task1 = new ObservableTask({name: 'create a demo for constructors', user: 'Andrew'});
//
// var not = new notificationService();
// var ls = new loggingService();
// var audit = new auditingService();
//
// task1.addObserver(not.update);
// task1.addObserver(ls.update);
// task1.addObserver(audit.update);
//
// task1.save();
//
// task1.removeObserver(audit.update);



// ************************ Mediator Pattern ************************

// var mediator = (function() {
//   var channels = {};
//
//   var subscribe = function(channel, context, func) { // func is kind of like a callBack but not in this situation
//     if (!mediator.channels[channel]) {
//       mediator.channels[channel] = [];
//
//     mediator.channels[channel].push({
//       context: context,
//       func: func
//     });
//   };
//
//   var publish = function(channel) {
//     if (!this.channels[channel]) {
//       return false;
//     }
//
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     for (var i = 0; i < mediator.channels[channel].length; i++) {
//       var sub = mediator.channels[channel][i];
//       sub.func.apply(sub.context, args)
//     }
//   }
//   return {
//     channels: {},
//     subscribe: subscribe,
//     publish: publish
//   };
// }());
//
// mediator.subscribe('complete', not, not.update);
// mediator.subscribe('complete', ls, ls.update);
// mediator.subscribe('complete', audit, audit.update);
//
// task1.complete = function() {
//   mediator.publish('complete', this);
//   Task.prototype.complete.call(this);
// }
