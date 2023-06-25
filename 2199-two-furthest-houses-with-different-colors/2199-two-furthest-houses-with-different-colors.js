/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    // use 2 pointers 
    let l = 0;
    let r = colors.length - 1;
    let maxDistance = 0;

    while (l < r) {
        if (colors[l] !== colors[r]) {
            maxDistance =  Math.max(r - l, maxDistance);
        } 
        l++
        
    }

    l = 0;
    while (l < r) {
        if (colors[l] !== colors[r]) {
            maxDistance =  Math.max(r - l, maxDistance);
        } 
        r--
    }

    return maxDistance
};

