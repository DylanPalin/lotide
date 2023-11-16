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
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
    if (Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys2[i]])) {
      if (!eqArrays(object1[keys1[i]], object2[keys2[i]])) {
        return false;
      }
    } else if (object1[keys1[i]] !== object2[keys2[i]]) {
      return false;
    }
  }
  return true;
};
// TEST CODE
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);