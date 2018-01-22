function define() {
  var cache = {};

  function pub(id) {
    var args = [].slice.call(arguments, 1);
    if (!cache[id]) {
      cache[id] = [];
    }
    for(var i = 0; i < cache[id].length; i++) {
      cache[id][i].apply(null, args);
    }
  }

  function sub(id, callback) {
    if (!cache[id]) {
      cache[id] = [callback];
    } else {
      cache[id].push(callback);
    }
  }

  return {
    pub: pub,
    sub: sub
  }
}
