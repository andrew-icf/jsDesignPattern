// REVEALING MODULE PATTERN
var repo = function() {

  var db = {};
  var get = function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db'
    }
  }
  var save = function(task) {
    console.log('Saving ' + task.name + ' to the db');
  }

  return {
    get: get,
    save: save
  }
}

repo.execute = function(name){
  var args = Array.prototype.slice.call(arguments, 1);

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
});
// module.exports = repo(); // being executed right here
