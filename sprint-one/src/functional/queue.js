var Queue = function(){
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if (counter > 0){
      var temp = storage[0];
      delete storage[0];
      counter--;
      
        storage[0] = storage[1];
      
      return temp;
    } 
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};



