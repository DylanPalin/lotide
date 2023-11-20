const tail = function(array) {
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const result2 = tail(["Hello"]);
const result3 = tail([]);

module.exports = tail;
