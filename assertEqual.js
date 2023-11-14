// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  console.assert(actual !== expected, "✅✅✅ Assertion Passed: " + actual + " === " + expected);
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
