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
    var n = num.toString(2);
    var z="";
    if(n.length<8){
      for(var i=n.length; i<8; i++)
            z+="0";
    }
    return z+n;
    },

    multiply: function(a, b) {
    var c=a*b;
    return parseInt(c.toFixed(1));
    }
  };
});

