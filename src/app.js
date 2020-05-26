/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1

const findFactorial = function(number,count=1) {
  //Your code here
  
   if (number===1) {return count }
   count *= number
   number= number-1
   
  return findFactorial(number,count)
}
console.log(findFactorial(8))
 /* str = "david"
 console.log(str.substring(0,str.length-2)) */

//Exercise 2
const reverseString = function(word,str= "") {
  //Your code here
   if(word.length===0) {return str}
   str += word.slice(word.length-1,word.length)
   word= word.substring(0,word.length-1)
   return reverseString(word,str)
}
console.log(reverseString("david"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []
/* console.log(arr1.shift()) */
const swap = function(arr1,arr2) {
  //Your code here
  if(arr1.length===0) {return arr1,arr2}
   arr2.push(arr1.shift())
   /* arr1.splice(0,1) */
   return swap(arr1,arr2)
}
swap(arr1,arr2)
console.log(arr1)
console.log(arr2)
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }