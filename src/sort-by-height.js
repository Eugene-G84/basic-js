const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const diggitSort = arr.filter((num) => num > 0).sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 0) {
      arr[i] = diggitSort[count];
      count += 1;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
