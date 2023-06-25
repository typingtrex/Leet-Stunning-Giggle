/**
 * @param {number[]} nums
 * @return {number}
 */

// DP faster approach
var maximumDifference = function(nums) {
    let min = Infinity;
    let diff = -1;

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        diff = Math.max(diff, nums[i] - min)
    }
    return diff === 0 ? -1 : diff
}


 /*
 // ----- creating functions ----------------------
var maximumDifference = function(nums) {
    const maxNumsArray = createArrayOfMaxNumRightMost(nums)
    const minNumsArray = createArrayOfMinNumLeftMost(nums)
    let difference = -1;

    for (let i = 0; i < maxNumsArray.length; i++) {
        const max = maxNumsArray[i];
        const min = minNumsArray[i];
        const diff = max - min;
        difference = Math.max(diff, difference);
    }
    if (difference === 0) {
        return -1
    }
    return difference;
};

const createArrayOfMaxNumRightMost = (nums) => {
    let maxNum = 0;
    const maxArray = new Array(nums.length).fill(0);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        maxNum = Math.max(maxNum, nums[i]);
        maxArray[i] = maxNum
    }
    return maxArray;
}

const createArrayOfMinNumLeftMost = (nums) => {
    let minNum = Infinity;
    const minArray = new Array(nums.length).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        minNum = Math.min(minNum, nums[i]);
        minArray[i] = minNum
    }
    console.log(minArray)
    return minArray;
}
*/