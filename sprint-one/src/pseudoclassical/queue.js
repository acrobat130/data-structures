var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if(this.counter > 0){
    var result = this.storage[0];
    delete this.storage[0];
    this.storage[0] = this.storage[1];
    this.counter--;
    return result;
  }
};

Queue.prototype.size = function() {

  return this.counter;
};