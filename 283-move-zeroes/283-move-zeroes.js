/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// steps:
    // 1. splice and count
    // 2. push as many times as count

var moveZeroes = function(nums) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1); 
            nums.push(0)
            i--;
            length--;
        console.log(nums);
        }
    }
    
    // for(let k = 0; k < count; k++) {
    //     nums.push(0)
    // }
    
    // console.log(nums)
    return nums
};