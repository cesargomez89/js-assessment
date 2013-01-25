if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2]);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
    return (function(str1){
      return str+", "+str1;
    })
    },

    makeClosures : function(arr, fn) {
    console.log(fn);
    for(var i=0; i<arr.length; i++){
      return fn.call(arr[i]);
    }
    },

    partial : function(fn, str1, str2) {
      console.log(fn) ;
      return fn(str1, str2);
    },

    useArguments : function(a,b,c,d) {
console.log(a);
    return a;
    return a+b;
    return a+b+c;
    return a+b+c+d;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
