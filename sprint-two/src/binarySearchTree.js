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
binaryTreeMethods.contains = function(value){
    var result = false;
    var currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        result = true;
        return result;
      }
    } 
    return result;
  // var result = false;
  // var doesNodeContain = function(node) {
  //   if (value === node.value) {
  //     result = true;
  //     return result;
  //   } else if (node.left !== null){
  //     doesNodeContain(node.left);
  //     result = true;
  //     return result;
  //   } else if (node.right !== null) {
  //     doesNodeContain(node.right);
  //     result = true;
  //     return result;
  //   }
  // }
  // doesNodeContain(this);
  // return result;
};
binaryTreeMethods.depthFirstLog = function(callback){
   var applyCallback = function(node){
    callback(node.value);
    if (node.left) {
      applyCallback(node.left);
    } else if (node.right) {
      applyCallback(node.right);
    }    
   }
   applyCallback(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
