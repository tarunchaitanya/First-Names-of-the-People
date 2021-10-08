const list1 = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (list1) => {
  return getFirstNames(list1);
};

module.exports = getPeopleInCity;
