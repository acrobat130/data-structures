var Stack = function(){
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if (counter > 0) {
      var temp = storage[counter - 1];
      delete storage[counter - 1];
      counter--;
      return temp;
    }
  };

  someInstance.size = function(){
    var size = counter;
    return size;
  };

  return someInstance;
};
