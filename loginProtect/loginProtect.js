/*
Write a function called loginProtect
This function will take 3 arguments
1. A username
2. A password
3. A function that will take two arguments
Your function should return a closure that when invoked 
with the correct username and password will invoke your third argument
with the 3rd and 4th argument that are passed to your closure 
Use the tests to guide your solution
*/

/*
Write a function called loginProtect
This function will take 3 arguments
1. A username
2. A password
3. A function that will take two arguments
Your function should return a closure that when invoked 
with the correct username and password will invoke your third argument
with the 3rd and 4th argument that are passed to your closure 
Use the tests to guide your solution
*/

var loginProtect = function (username , password, func) {
  return function(usname , ipPass){
  if(password === ipPass && username === usname) {
    return func(arguments[2], arguments[3])
  }
  };
};
var myFunc = function(a, b) {
  console.log('my func ran');
  return a + b;
};
var loginProtection = loginProtect( 'mehul','p@ssw0rd',myFunc);
