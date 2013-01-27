if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {

      var x="";
      console.log(num);
      if(!isNaN(num)){
        if(num % 3==0){
          x+='fizz';
        }
        if(num % 5==0){ 
          x+= 'buzz';
        }
        if(x=="") {return num;} else return x; 
      }
    }

  };
});
