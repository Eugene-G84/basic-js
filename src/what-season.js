const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date === false || Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!');

  const season = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();

  if (month < 2 || month === 11) return season[0];
  if (month >= 2 && month < 5) return season[1];
  if (month >= 5 && month < 8) return season[2];
  if (month >= 8 && month < 11) return season[3];
}

module.exports = {
  getSeason
};
