const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    return;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3])
