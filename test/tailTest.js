const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
assertEqual(tail(["Hello"]), []);
assertEqual(tail([]), []);