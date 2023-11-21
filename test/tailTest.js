const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns Lighthouse, Labs instead of Hello, Lighthouse, Labs", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns Lighthouse instead of Hello, Lighthouse", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
  });
});
