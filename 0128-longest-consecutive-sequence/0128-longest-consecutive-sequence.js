/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // if nums array is empty;
    if (nums.length === 0) {
        return 0;
    }
    let maxLength = 0;
    let set = new Set();

    // Create a look up for o(1)
    nums.forEach(n => {
        set.add(n);
    });

    for(let n of nums){

        // We want to check the consectutive numbers at the beginning
        // If it isn't we ignore
        // Otherwise we figure out how long the consectutive length is.
        if(!set.has(n-1)){
            let length = 0;
            let currNum = n;

            while(set.has(currNum)){
                currNum++;
                length++;
            }

            maxLength = Math.max(maxLength, length)
        }
    }

    return maxLength;

/*
    // ------ TAKES TOO LONG ------- O (MAX - MIN) TIME COMPLEXITY
    // iterate once more through the min and max nums
    // 1, 2, 3, 4
    for (let i = min; i <= max; i++) {
        currNum = i;
        if (mapOfNums[currNum]) {
            count++;
            
        } else {
            maxConsecutive = Math.max(maxConsecutive, count);
            count = 0;
        }
        
    }
    */
  
};