/**
 * @param {number[]} nums
 * @return {number}
 */

// ---- Time complexity O2N => ON -----------

var pivotIndex = function(nums) {
    let pointer; 
    let leftSum = 0;
    let rightSum = 0;
    for(let j = 0; j < nums.length; j ++) {
            rightSum += nums[j];
        }
    for (let i = 0; i < nums.length; i++) {
        pointer = i
        if(nums[i-1]){
            leftSum += nums[i -1]; 
        }
        rightSum = rightSum - nums[i];
        if (leftSum === rightSum) {
            return pointer;
        }
        
    }
    return -1;
};

         
// pseudo code 
         /*
         first find the sum 
         do a for loop to start adding the sum starting from the left side  and check left sum vs right sum
         -- want it to be equal (without counting pivot index num) 
         if end of loop and not equal, return -1
         
         
         first attempt: Time Complexity ON^2

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
         */
