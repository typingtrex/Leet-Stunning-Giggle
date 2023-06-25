/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = new Array(arr.length).fill(-1);
    
    // work backwards to know what's the largest compared to the current index
    let max = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        max = Math.max(arr[i + 1], max);
        // console.log(max);
        result[i] = max;
    }

    return result
}
