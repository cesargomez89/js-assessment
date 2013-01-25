if (typeof define !== 'function') { var define = require('amdefine')(module);} 

define(function() {
  return {
    indexOf : function(arr, item) {
    return arr.indexOf(item);
    },

    sum : function(arr) {
      var i=0;
      var suma=0;
      while(i<arr.length){
      suma+=arr[i];
      i++;
      }
    return suma;
    },

    remove : function(arr, item) {
      var arr2=[];
      arr.forEach(function(val){
        if(val!=item)
          arr2.push(val);
      })
    return arr2;
    },
    
    removeWithoutCopy : function(arr, item) {
      var i=0;
      while(i<arr.length)
        {
          arr.splice(arr.indexOf(item),1);
          i++;
        }
        return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
    arr.pop();
    return arr;
    },

    concat : function(arr1, arr2) {
    return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
    },

    count : function(arr, item) {
      var cont=0;

      arr.forEach(function(val){
        if(val==item) cont++;
      })
      return cont;
    },

    duplicates : function(arr) {
      var cd=0;
      var dup=[];
      arr.sort();
      for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
          if(arr[i]==arr[j])
            cd++;
        }
        if(cd>1) {
          arr.splice(i,1);
        dup.push(arr[i]);
          }
        cd=0;
      }
      return dup;
    },

    square : function(arr) {
    for(var i=0; i<arr.length; i++){
    arr[i]=arr[i]*arr[i];
    }
    return arr;
    },

    findAllOccurrences : function(arr, target) {
     var result=[];
     for(var i=0; i<arr.length; i++){
     if(arr[i]==target)
      result.push(i);
     }
     console.log(result);
     return result;
    }
  };
});
