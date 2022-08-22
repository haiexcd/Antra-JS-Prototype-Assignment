// For Weekend Assignment, I want you to implement myMap and myReduce function for Array in Javascript, 
// which exactly have the same functionalities with the built in functions by using prototype.

// my map
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result;
}


// my filter
Array.prototype.myFilter = function (callback) {
  const result = [];  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
}


// my reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let previous = initialValue === undefined ? this[0] : initialValue;
  let current = initialValue === undefined ? this[1] : this[0];
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    previous = callback(previous, current);
    current = this[i + 1]
  }
  return previous;
}


