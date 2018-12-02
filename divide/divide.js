/*
Create a divide function using closures
Then create three functions divide10, divide20, divide5
the divide function will take one argument that it will divide the closure
*/

const divide = function (num) {
  function division(i){
   return i / num;
  }
  return division;
}

// replace null with the correct assignment to the variable
const divide5 = new divide(5)
const divide10 = new divide(10)
const divide20 = new divide(20)

module.exports = {
  divide,
  divide5,
  divide10,
  divide20
}
