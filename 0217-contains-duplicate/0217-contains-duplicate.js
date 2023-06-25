/**
 * @param {number[]} nums
 * @return {boolean}
 */

// ----- most recent solution -----------
var containsDuplicate = function(nums) {
    // 1st method: 
    // sort the array and see if the current num is equal to the next num 
        // if true return true
        // after iterating, return false
        // ---- TIME Complexity ----- O (nLogN)
        // ------ space complexity  ---- O(1) 
        // ----- SOLUTION: ---------------------------------
        // nums.sort()
        // for (let i = 0; i < nums.length - 1; i++) {
        //     const num1 = nums[i];
        //     const num2 = nums[i + 1];
        //     if (num1 === num2) {
        //         return true
        //     }
        // }
        // return false

    // 2nd method: 
    // iterate and create hashmap
        // if seen in hashmap then return true
        // after iteration is complete return false
        // ----- TIME complexity --- O(N)
        // ------- SPACE complexity --- O(N)
        const seenNumbers = {};
        for (let i = 0; i < nums.length; i++) {
            const currNum = nums[i];
            if (seenNumbers[currNum]) {
                return true;
            } else {
                seenNumbers[currNum] = 1;
            }
        }

        return false
}

 // ----- previous solution: ---------
 /*
var containsDuplicate = function(nums) {
    const sortedNums = nums.sort((a, b) => a-b); // time compplexity n(logN)
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
    
    // let seenHashmap = {};

    // for(let i = 0; i < nums.length; i++) {
    //     if(seenHashmap[nums[i]]) {
    //         return true;
    //     } else {
    //         seenHashmap[nums[i]] = true;
    //     }
    // }

    // return false;

    
};
*/