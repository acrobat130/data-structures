var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(i, v);
    // if (!this._storage) {
    //   this._storage[i]
    // }
    // this._storage[i] = [k,v];

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if (this._storage.length > 0 && this._storage.length < 2) {
    return this._storage.get(i);

  // } else if (this._storage.length > 1) {
  //   console.log("do you see me");
  //   for (var j = 0; j < this._storage.length; i++) {
  //     if (k === this._storage[i][j]) {
  //       return this._storage[i][j+1];
  //     }
  //   }
  // }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, j, limitedArrayStorage) {
    if (i === j) {
      limitedArrayStorage[j] = null;
    }
  })
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
