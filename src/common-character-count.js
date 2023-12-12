const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  const SPLIT_STR1 = Array.from(s1);
  const SPLIT_STR2 = Array.from(s2);

  let res = 0;

  for (let simbol of SPLIT_STR1) {

    if (SPLIT_STR2.includes(simbol)) {
      res += 1;
      SPLIT_STR2.splice(SPLIT_STR2.indexOf(simbol), 1);
    }

  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
