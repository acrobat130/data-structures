

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    } else {
      return false;
    }
  }
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    var temp = this.nodes[i];
    delete this.nodes[i];
    return temp;
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  for (var i = 0; i < this.edges.length; i++) {
    if (fromNode === this.edges[i][0] && toNode === this.edges[i][1]){
      result = true;
      return result;
    } else if (fromNode === this.edges[i][1] && toNode === this.edges[i][0]) {
      result = true;
      return result;
    } 
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



