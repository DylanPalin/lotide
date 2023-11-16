const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    return console.log(`${a} === ${b}`);
  } else {
    return console.log(`${a} !== ${b}`);
  }
};
const middle = function(array) {
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

assertArraysEqual(middle([1])); 
assertArraysEqual(middle([1, 2])); 
assertArraysEqual(middle([1, 2, 3]), 2); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), 3); 
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])); 
