const assertEqual = function(a, b) {
  if (a === b) {
    return console.log(`${a} === ${b}`);
  } else {
    return console.log(`${a} !== ${b}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const counts = {};
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      if (counts[allItems[i]]) {
        counts[allItems[i]]++;
      } else {
        counts[allItems[i]] = 1;
      }
    }
  }
  return counts;
};

const firstNames = [
  "Karl",
  "Samlima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Samlima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Aghouhanna"], undefined);