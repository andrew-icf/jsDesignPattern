var Task = require('./task');
var Repo = require('./taskRepo');

var task1 = new Task(Repo.get(1));
// var task1 = new Task('constructor demo'); // creates a new object everytime, essentially duplicating code use prototypes to link objects
var task2 = new Task('modules demo');
var task3 = new Task('singletons demo');
var task4  = new Task('prototype demo');

task1.complete();
task2.save()
task3.save()
task4.save()
