var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set._counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[this._counter] = item;
  this._counter++
};

setPrototype.contains = function(item){
  var result = false;
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      result = true;
      return result;
    }
  }
  return result;
};

setPrototype.remove = function(item){
  var temp = this._storage[this._counter - 1];
  delete this._storage[this._counter - 1];
  return temp;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
