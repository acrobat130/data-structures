var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //list.tail = {value: value};
    // create new node object
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      //list.head.next = list.tail;
      list.tail = newNode;    
    } else {
      list.tail = newNode;
    }
    return newNode;
    //list.head = list.tail;
    //return list.tail;
    //console.log(list.tail);
  };

  list.removeHead = function(){
  var result = list.head.value;
   list.head = list.tail;
   return result;
    // delete list.head.value
    // return list.head;
  };

  list.contains = function(target){
    if(list.tail.value === target || list.head.value === target){
      return true;
    }else{
      return false;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
