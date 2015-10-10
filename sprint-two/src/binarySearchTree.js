var BinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.value = value;
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree; 
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
 
  // recursive case 
  var findNodes = function(node) {
    //if (node !== null) {
      if (value < node.value){
        if (node.left === null) {
          node.left = new BinarySearchTree(value);

        } else {
          findNodes(node.left);
        }
      } else if (value > node.value) {
          if (node.right === null) {
            node.right = new BinarySearchTree(value);
          } else {
            findNodes(node.right);
          }
      }
    //}
  }
  findNodes(this);

  // console.log(this);
};
binaryTreeMethods.contains = function(value){};
binaryTreeMethods.depthFirstLog = function(callback){};


/*
 * Complexity: What is the time complexity of the above functions?
 */
