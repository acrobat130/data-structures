var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;  // fix me
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //this.value = {value: value};
  this.value = new Tree(value);
  this.children.push(this.value);

};

treeMethods.contains = function(target){
  if(target === this.value.value){
    return true;
  }else{
    return false;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
