/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let boo = false;
    
    if (nums.length === 2) {
        return boo;
    }
    
    for (let i = 0; i < nums.length -2; i++) {
        let firstSum = nums[i] + nums[i+1];
        
        for (let j = i +1; j < nums.length; j++) {
            let secondSum = nums[j] + nums[j+1];
            if (firstSum === secondSum) {
                boo = true;
                return boo;
            }
        }
    }
    
    return boo;
};