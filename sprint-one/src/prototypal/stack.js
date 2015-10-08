var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.counter = 0;
  return obj;
};

var stackMethods = {

};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};
stackMethods.pop = function() {
  if(this.counter > 0){
    var result = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return result;

  }
};
stackMethods.size = function() {
  return this.counter;
};
