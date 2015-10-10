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
  var temp = new BinarySearchTree(value);
};
binaryTreeMethods.contains = function(value){};
binaryTreeMethods.depthFirstLog = function(callback){};


/*
 * Complexity: What is the time complexity of the above functions?
 */
