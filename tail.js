const tail = function(array) {
  if (array === undefined || array.length <= 1) {
    throw new Error("Array must have at least two elements");
  }
  return array.slice(1);
};

module.exports = tail;
