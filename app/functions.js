if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2]);
    },

    speak : function(fn, obj) {
      return fn(obj.greeting, obj.name,"!!!");
    },

    functionFunction : function(str) {
    return (function(str1){
      return str+", "+str1;
    })
    },

    makeClosures : function(arr, fn) {
    
    },

    partial : function(fn, str1, str2) {
    
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
