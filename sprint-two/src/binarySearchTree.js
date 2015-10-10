var BinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.children = [];
  newBinaryTree.value = null;
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree; 
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  // make new tree if nothing exists yet
  if (this.value === undefined) {
    return new BinarySearchTree(value);
  }
  // recursive case 
  var findNodes = function(value) {
    if (value < this.value){
      this.left = new BinarySearchTree(value);
    } else if ( value > this.value) {
      this.right = new BinarySearchTree(value);
    }
  }
  
};
binaryTreeMethods.contains = function(value){};
binaryTreeMethods.depthFirstLog = function(callback){};


/*
 * Complexity: What is the time complexity of the above functions?
 */
