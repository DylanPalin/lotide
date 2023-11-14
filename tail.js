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
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const result2 = tail(["Hello"]);
const result3 = tail([]);

// TEST CODE
assertEqual(result.length, 2);
assertEqual(words.length, 3);
assertEqual(result2.length, 0);
assertEqual(result3.length, 0);