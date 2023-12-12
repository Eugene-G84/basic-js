const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const SPLIT = String(n).split('');

  SPLIT.forEach((num, index) => {
    if (num < SPLIT[index + 1]) return SPLIT.splice(index, 1);
    if (SPLIT.length < 3) return SPLIT.splice(index + 1, 1);
  })

  return +SPLIT.join('');
}

module.exports = {
  deleteDigit
};
