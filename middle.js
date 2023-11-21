const middle = function(array) {
  if (!array) {
    return [];
}
  let middleNum = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length < 3) {
    return middleNum;
  } else if (array.length % 2 === 0) {
    middleNum.push(array[midIndex - 1], array[midIndex]);
  } else {
    middleNum.push(array[midIndex]);
  }
  return middleNum;
};

module.exports = middle;