var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.add = queueMethods.enqueue;
  obj.remove = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};
  var storage = {};
  var counter = 0;
  queueMethods.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  queueMethods.dequeue = function(){};

  queueMethods.size = function(){
    return counter;
  };

  





