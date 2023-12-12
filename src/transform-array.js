const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if ((arr instanceof Array) == false) throw new Error('\'arr\' parameter must be an instance of the Array!');


  const res = [];

  for (let i = 0; i < arr.length; i += 1) {

    res.push(arr[i]);

    if (arr[i] === '--discard-prev') {

      if (arr[i] === '--discard-prev' && arr[i - 1] === undefined) {
        res.shift();
      }

      if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next') {
        res.pop();
        res.pop();
      }

      // if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      //   res.pop();
      //   res.pop();
      // }

      if (arr[i] === '--discard-prev' && arr[i - 2] === '--double-next') {
        res.pop();
        res.pop();
      }

      if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next') {
        res.pop();
      }

    }


    if (arr[i] === '--double-prev') {

      if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {
        res.pop();
      }

      if (arr[i] === '--double-prev' && arr[i - 1] === undefined) {
        res.shift();
      }

      if (arr[i] === '--double-prev' && !arr[i - 1] == undefined) {
        res.pop();
        res.push(arr[i - 1]);
      }

      res.pop();
    }


    if (arr[i] === '--double-next') {

      if (arr[i] === '--double-next' && arr.at(-1) === '--double-next') {
        res.pop();
      }

      if (arr[i] === '--double-next' && arr.at(-1) !== '--double-next') {
        res.pop();
        res.push(arr[i + 1]);
      }

      if (arr[i] === '--double-next' && arr[i + 2] == '--double-prev') {
        res.pop();
        res.push(arr[i + 1]);
        res.push(arr[i + 1]);
      }
    }

    if (arr[i] === '--discard-next') {

      if (arr[i] === '--discard-next' && arr.at(-1) === '--discard-next') {
        res.pop();
      }

      if (arr[i] === '--discard-next' && arr[i + 2] == '--double-prev') {
        res.pop();
      }
    }
  }

  return res;
}

module.exports = {
  transform
};
