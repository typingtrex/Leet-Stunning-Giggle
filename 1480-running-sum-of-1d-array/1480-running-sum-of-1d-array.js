/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let returnSumArray = [];
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        returnSumArray.push(currentSum);
    }
    return returnSumArray;
};