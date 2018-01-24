var Promise = function() {
  var data,
      done = [],
      fail = [],
      status = 'progress';

  this.done = function(callback){
    done.push(callback);

    if (status ==='done') {
      callback(data);
    }
    return this;
  }
  this.failed = function(callback){
    fail.push(callback);

    if (status ==='failed') {
      callback(data);
    }
    return this;
  }
  this.resolve = function(result){
    if (status !== 'progress') {
      throw 'Promise has been completed with a status of ' + status;
    }
    status = 'done';
    data = result;

    for (var i = 0; i < done.length; i++) {
      done[i](data);
    }

    return this;
  }
  this.fail = function(reason){
    if (status !== 'progress') {
      throw 'Promise has been completed with a status of ' + status;
    }
    status = 'failed';
    data = reason;

    for (var i = 0; i < fail.length; i++) {
      fail[i](data);
    }

    return this;
  }


module.exports = Promise;
