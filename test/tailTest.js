const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Labs"]);
assertArraysEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
assertArraysEqual(tail(["Hello"]), []);
assertArraysEqual(tail([]), []);