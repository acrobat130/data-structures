var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.counter = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;

}
queueMethods.dequeue = function() {
  if(this.counter > 0){
    var result = this.storage[this.counter - this.counter]
    delete this.storage[this.counter - this.counter];
    this.storage[0] = this.storage[1];
    this.counter--;
    return result;
  }
  

}
queueMethods.size = function() {
  return this.counter;
}

