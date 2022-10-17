const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError("Not implemented");
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  if (date instanceof Date) {
    {
      const month = date.getMonth.call(date);
      if (3 <= month && month <= 5) {
        return "spring";
      }

      if (6 <= month && month <= 8) {
        return "summer";
      }

      if (9 <= month && month <= 11) {
        return "autumn";
      }

      return "winter";
    }
  }
}

module.exports = {
  getSeason,
};
