/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pointer; 
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < nums.length; i++) {
        pointer = i
        if(nums[i-1]){
            leftSum += nums[i -1]; 
        }
        for(let j = i+1; j < nums.length; j ++) {
            rightSum += nums[j];
        }
        if (leftSum === rightSum) {
            return pointer;
        }
        rightSum = 0;
    }
    return -1;
};

         
// pseudo code 
         /*
         first find the sum 
         do a for loop to start adding the sum starting from the left side  and check left sum vs right sum
         -- want it to be equal (without counting pivot index num) 
         if end of loop and not equal, return -1
         
         */
