const tail = function(array) {
  if (array === undefined || array.length <= 1) {
    return console.log("Array is empty or has only one element.");
  }
  return array.slice(1);
};

module.exports = tail;
