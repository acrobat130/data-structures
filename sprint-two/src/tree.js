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
  this.children.push(new Tree(value));
  //this.children.push(this.value);


};

// this function checks tree for matching target value
treeMethods.contains = function(target){
  // base case - return true if target = value
  var isFound = false; // flag variable, should be verb
  if(target === this.value){
    isFound = true;
  } else {
  // recursive case
  // if (this.children.length > 0){
    // run contains function on all objects in children array
    for (var i = 0; i < this.children.length; i++) {
      //console.log("children obj:",this.children[i],"children value:", this.children);
      if (this.children[i].contains(target)) {
        isFound = true;
        return isFound;
      }
    }
  }
  // }
  return isFound;


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
