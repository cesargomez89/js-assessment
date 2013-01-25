if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };
      return myObject;
    },

    functions : function(flag) {
       // return(function(){ 
          if(flag){ return 'a';}
          else {return 'b';}
         // })();
    },

    parseInt : function(num) {
      var r=new RegExp(/^\d{1,}/);
      num=num.match(r);
      return parseInt(num,10);
    },

    identity : function(val1, val2) {
      if(val1+val2=='11') return false;
      if(val1+val2==2) return true;
      if (val1+val2==0) return false;
    }
  };
});
