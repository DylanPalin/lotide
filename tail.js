// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function tail which returns the "tail" 
// of an array: everything except for the first item (head) of the provided array.

const tail = function(array) {
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
const result1 = tail(["Hello", "Lighthouse", "Labs", "Testing"]);
const result2 = tail([])

// TEST CODE
assertEqual(result.length, 2);
assertEqual(result1.length, 3);
assertEqual(result2.length, 0)