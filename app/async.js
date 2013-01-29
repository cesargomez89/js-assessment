if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      //console.log(value);
      var async{ function(){
        then: function(value){
          return value;
        }
      }
      };
      return async;
    },

    manipulateRemoteData : function(url) {
      $.getJSON(url,)
      //console.log(url);
    }
  };
});
