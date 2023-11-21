const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(tail(["Hello"]), "Hello");
assertEqual(tail([]));