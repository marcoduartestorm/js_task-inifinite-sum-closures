'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      let sumTemp = sum;
      sum = 0;

      return sumTemp;
    } else {
      sum += a;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
