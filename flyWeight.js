var Task = function (data) {
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
  this.name = data.name;
  // this.priority = data.priority;
  // this.project = data.project;
  // this.user = data.user;
  // this.completed = data.completed;
}

function Flyweight(project, priority, user, completed) {
  this.project = project;
  this.priority = priority;
  this.user = user;
  this.completed = completed;
}

var FlyweightFactory = function() {
  var flyweights = {};

  var get = function (project, priority, user, completed) {
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] =
        new Flyweight(project, priority, user, completed);
    }
    return flyweights[project + priority + user + completed];
  }

  var getCount = function() {
    var count = 0;
    for (var f in flyweights) count++;
      return count;
  }

  return {
    get: get,
    getCount: getCount
  };
}()

// var tasks = new TaskCollection();

// these are all shared so we can create a flyweight around these
var projects = ['none', 'courses', 'training'];
var priorities = [1, 2, 3, 4];
var users = ['Andrew', 'Bill', 'Chris'];
var completed = [true, false];
