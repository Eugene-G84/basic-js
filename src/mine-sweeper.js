const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (matrix[i][j] === true) matrix[i][j] = 'X';
      else matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < 3; j += 1) {

      if (matrix[i][j] === 'X') {

        if (i > 0) {
          if (matrix[i - 1][j - 1] !== 'X') matrix[i - 1][j - 1] += 1;
          if (matrix[i - 1][j] !== 'X') matrix[i - 1][j] += 1;
          if (matrix[i - 1][j + 1] !== 'X') matrix[i - 1][j + 1] += 1;
        }

        if (matrix[i][j - 1] !== 'X') matrix[i][j - 1] += 1;
        if (matrix[i][j + 1] !== 'X') matrix[i][j + 1] += 1;

        if (i < matrix[0].length - 1) {
          if (matrix[i + 1][j - 1] !== 'X') matrix[i + 1][j - 1] += 1;
          if (matrix[i + 1][j] !== 'X') matrix[i + 1][j] += 1;
          if (matrix[i + 1][j + 1] !== 'X') matrix[i + 1][j + 1] += 1;
        };
      }

    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (matrix[i][j] === 'X') matrix[i][j] = 1;
    }
  }

  return matrix;
}

module.exports = {
  minesweeper
};
