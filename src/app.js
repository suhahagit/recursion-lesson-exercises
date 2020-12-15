/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  //Your code here
  if(num === 0){return 1}
  return n * findFactorial(n-1)
}

//Exercise 2
const reverseString = function(str) {
  //Your code here
  if (str === '') {return ""}
  return reverseString(str.substr(1)) + str.charAt(0)
}

//Exercise 3
const swap = function(arr1, arr2) {
  //Your code here
  if(arr1.length === 0){
    return 
  }
  arr2.push(arr1[0])
  arr1.shift()
  return swap(arr1, arr2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }