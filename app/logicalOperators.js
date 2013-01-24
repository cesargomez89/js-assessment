if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
      if(a==true||b==true)
      return a, b;
    },

    and : function(a, b) {
    //if(a==true&&b==true)
      a&&b? true : false;
      return a, b;
    }
  };
});
