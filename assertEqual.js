const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
          return;
        }
      }
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      return;
    }
  }
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;