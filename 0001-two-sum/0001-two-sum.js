/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        const difference = target - currentNum;
        
        if (hashmap[difference] || hashmap[difference] == 0) {
            // console.log("current hashmap[diff]", hashmap[difference])
            return [hashmap[difference], i]
        } 

        if (!hashmap[currentNum]) {
            hashmap[currentNum] = i 
        }
    }
};
// ---------- previous answer -----------------------
    // let resultArray = [];
    // let hashmap = {}
    // for(let i = 0; i< nums.length; i++) {
    //     let currentNum = nums[i]
    //     let targetNum = target - currentNum;
    //     if(hashmap[targetNum] || hashmap[targetNum] === 0) {
    //         resultArray.push(i);
    //         resultArray.push(hashmap[targetNum])
    //         break;
    //     } else {
    //         hashmap[currentNum] = i;
    //     }
        
    // }
    // return resultArray;
// -------------------------------------------------

//     let hashmap = {};
    
//     for (let i = 0; i < nums.length; i++) {
        
//         hashmap[target - nums[i]] = true;
//         console.log(hashmap)
//     }
    
//     for(let i = 0; i < nums.length; i++) {
//         let one = nums[i];
//         let two = target - one;
//         console.log(hashmap[one], hashmap[two], target, hashmap)
        
//         if(hashmap[two] === ) {
//             return [i, hashmap[two]]
//         }
//     }


// --- prev answ -----
/*
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

*/