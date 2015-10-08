var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  var obj = {};
  obj.counter = 0;
  obj.storage = {};
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;
  return obj;
};

//var storage = {};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;

};
stackMethods.pop = function(){
  if(this.counter > 0){
    var temp = this.storage[this.counter - 1];
    delete  this.storage[this.counter - 1];
    this.counter--;
    return temp;
  }

};
stackMethods.size = function(){
  return this.counter;
}

