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
      function a(x){
      return fn(str1, str2, x);
      }
      return a;
    },

    useArguments : function() {
    var arg=arguments.length;
    var x=0;
    for(var i=0;i<arg;i++)
    x+=arguments[i];
    return x;
    },

    callIt : function(fn) {
    if(arguments.length==2)
      return fn(arguments[1],arguments[2]);
    if(arguments.length==3)
      return fn(arguments[1],arguments[2], arguments[3]);
    },

    partialUsingArguments : function(fn) {

      function a(){
      return fn(arguments[1],arguments[2],arguments[3]);
      }
      return a;

    },

    curryIt : function(fn) {

    }
  };
});
