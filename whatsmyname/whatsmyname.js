/*
Create a whatsmyname function using closures
The function will take one argument, 1. a string
whatsmyname should return a function. Use the tests to guide you
*/

var whatsmyname = function (name) {
    var result = false;
    var naming = function(ipName) {
     if(ipName === name){
         result = true;
       
     }
       return result;
   
    };
    return naming;
};

 var ppl1 = new whatsmyname("mehul");
  var ppl2 = new whatsmyname("mehul1");

