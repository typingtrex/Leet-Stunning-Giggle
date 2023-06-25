/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ans[i] == nums[i] && ans[i + n] == nums[i];

var getConcatenation = function(nums) {
    let length = nums.length;
    const result = new Array(length*2).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[i + length] = nums[i];
    }
    return result;
}
/*
// -------- previous answer -----------
var getConcatenation = function(nums) {
    const ans = new Array(nums.length*2).fill(0);
    // console.log("filled", ans)
    const length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[length + i] = nums[i];
    }
    return ans;
};
*/