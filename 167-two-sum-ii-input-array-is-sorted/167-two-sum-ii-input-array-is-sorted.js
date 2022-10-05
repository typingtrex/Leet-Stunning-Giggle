/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // function twoSum (numbers, target) {
    let left = 0; 
    let right = numbers.length - 1; 


while (left != right) {
  let pair = numbers[left] + numbers[right]; 

  if (pair > target) {
    right--; 
  } else if (pair < target) {
    left++ 
  } else {
  return [left + 1 , right + 1]; 
  }
 
}

  
};