/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultArray = [];
    let hashmap = {}
    for(let i = 0; i< nums.length; i++) {
        let currentNum = nums[i]
        let targetNum = target - currentNum;
        if(hashmap[targetNum] || hashmap[targetNum] === 0) {
            resultArray.push(i);
            resultArray.push(hashmap[targetNum])
            break;
        } else {
            hashmap[currentNum] = i;
        }
        
    }
    return resultArray;
};

