const tail = function(array) {
  if (array === undefined || array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;
