var uniqueRandomArray = require('unique-random-array');
var robosoftNames = require('./robosoft-names.json');

module.exports = {
    all: robosoftNames,
    random: uniqueRandomArray(robosoftNames)
};