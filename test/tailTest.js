const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
assertArraysEqual(tail(["Hello"]), []);
assertArraysEqual(tail([]), []);