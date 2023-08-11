/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /*
colors: 
    1. red = 0
    2. white = 1
    3. blue = 2
 */
var sortColors = function(nums) {
    let redCount = 0;
    let whiteCount = 0;
    let blueCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const color = nums[i];
        // console.log("color ", color)
        if (color === 0){            
            redCount++;
        }
        if (color === 1){
            whiteCount++;
        }
        if (color === 2){
            blueCount++;
        }
    }

    // console.log("red, white, blue: ", redCount, whiteCount, blueCount)
    let idx = 0
    while (redCount || whiteCount || blueCount) {
        if (redCount) {
            nums[idx] = 0;
            redCount--;
        } else if (whiteCount) {
            nums[idx] = 1;
            whiteCount--; 
        } else if (blueCount) {
            nums[idx] = 2;
            blueCount--;
        }
        idx++;    
    }
    return nums
}

// -------- tried using a in place method with while loops -----
/*
var sortColors = function(nums) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    let whiteCount = 0;
    let total = nums.length;
    let currIdx = 0;

    while (total !== whiteCount) {
        console.log("total, whiteCount ", total, whiteCount)
        const color = nums[currIdx];
        if (color === 0) {
            [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]];
            leftIdx++;
            total--;
            console.log("0 ", nums)
        } 
        if (color === 1) {
            whiteCount++;
            console.log("white ", nums)
        }
        if (color === 2) {
            console.log(nums[rightIdx]);
            [nums[currIdx], nums[rightIdx]] = [nums[rightIdx], nums[currIdx]];
            rightIdx--;
            total--;
            console.log("blue ", nums)
        }
        currIdx++;
    }

    console.log("out of first loop", nums)
    // while (whiteCount) {
    //     nums[leftIdx] = 1;
    //     leftIdx++
    //     whiteCount--;
    // }

    return nums;
}; 
*/