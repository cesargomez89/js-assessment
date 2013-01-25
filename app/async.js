if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    console.log(value);
    
    },

    manipulateRemoteData : function(url) {

    console.log(url);
    }
  };
});
