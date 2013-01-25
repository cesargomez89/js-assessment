if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      myObject = {
        name : 'Jory'
      };
      console.log(myObject.name);
      return myObject;
    },

    functions : function(flag) {
       // return(function(){ 
          if(flag){ return 'a';}
          else {return 'b';}
         // })();
      }
    },

    parseInt : function(num) {
      var r=new RegExp(/^\d{1,}/);
      num=num.match(r);
      console.log(num);
      return parseInt(num,10);
    },

    identity : function(val1, val2) {

    }
  };
});
