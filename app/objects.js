if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      console.log(obj.name);
      console.log(obj.greeting);
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    //console.log(constructor);
    return constructor();
    },

    iterate : function(obj) {
      var res=[];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          res.push(i + ": " + obj[i]);
        }
      }
      return res;
    }
  };
});
