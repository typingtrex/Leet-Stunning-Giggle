/**
 * @param {number} num
 * @return {number}
 */
let helper = (num, count) => {
  if (num == 1) {
    return count + 1
  }
  // check if num is odd / even
  if (num % 2 == 0) { // EVEN
    num = num/2;
  }
  else if (num % 2 == 1) { // ODD -- could just use else
    num = num -1
  }
  // divide by 2 or subtract 1
  return helper(num, count + 1)
}

var numberOfSteps = function(num) {
  if(num === 0) {
      return 0
  }  
    
  return helper(num, 0);
};