if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return parseInt(num, bit);
    },

    base10: function(str) {
    return parseInt(str,2);
    },

    convertToBinary: function(num) {
    return num.toString(2);

    },

    multiply: function(a, b) {

    }
  };
});

