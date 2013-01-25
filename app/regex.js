if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var r=RegExp(/\d/);
    return r.test(str);
    },

    containsRepeatingLetter : function(str) {
    var r=new RegExp(/[A-z]+/);
    return r.test(str);
    },

    endsWithVowel : function(str) {
    var r=new RegExp(/[a|e|i|o|u|A|E|I|O|U]$/);
    return r.test(str);
    },

    captureThreeNumbers : function(str) {
    var r=new RegExp(/\d{3,3}/);
    if(r.test(str))
    return str.match(r).toString();
    else
      return false;
    },

    matchesPattern : function(str) {
    var r=new RegExp(/^\d{3,3}-\d{3,3}-\d{4,4}$/);
    return r.test(str);
    },
    isUSD : function(str) {
    var r=new RegExp(/^\$\d{1,3}\.\d\d|,\d{3,3}] /);
    return r.test(str);
    }
  };
});
