if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
    },

    base10: function(str) {
    return parseInt(str,2);
    },

    convertToBinary: function(num) {
    var a=parseInt(num,8);
    var b=parseInt(num,2);
    console.log(b);
    return b.toString();

    },

    multiply: function(a, b) {

    }
  };
});

