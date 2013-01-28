if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(fn, arr);
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
      //console.log(fn);
      var arr2=[];
      var newfn = function(num){
       return function(){return fn(num);}
      };

      for(var i=0; i<arr.length; i++){
        arr2.push(newfn(arr[i]));
      }
        return arr2;
    },

    partial : function(fn, str1, str2) {
      console.log(fn) ;
      function a(x){
        return fn.call(null, str1, str2, x);
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
   var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var args2 = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, args2);
      }

    },

    curryIt : function(fn) {

    }
  };
});
