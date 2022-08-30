/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
    let left = 0
    let right = height.length-1
    let maxArea = 0
    
    while (left < right) {
        let currMinHeight = Math.min(height[left], height[right])
        let area = currMinHeight * (right - left)
        
        // area > maxArea ? maxArea = area : null
        if (area > maxArea) {
            maxArea = area;
        } 
        
        // currMinHeight < height[right] ? left++ : right--
        if(currMinHeight < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;

};

/*
edge cases: 
    input array is empty?
    multiple containers
        even though a point earlier than the container endpoint is taller, water volume is not limited
        -- for this problem shouldn't matter
    height can it be negative numbers?


first brute force attempt -- Pam Phillip Ji ----------------


    pointers
        both pointers at index zero
        increment second pointer and do calculations 
        start at ends (width)
    sliding window 
        set variable currentVolume = 0;
        
        check currentVolume against iteratedVolume 
        keep larger volume and height and index of the 2 bars


for(let i = 0; i < height.length -1; i++) {
        let leftIndex = i;
        let leftHeight = height[i];
        for(let j = i+1; j < height.length; j++) {
            let rightIndex = j;
            let rightHeight = height[j]
            
            let currentWidth = rightIndex - leftIndex;
            let currentHeight;
            if (rightHeight > leftHeight) {
                currentHeight = leftHeight;
            } else {
                currentHeight = rightHeight;
            };
            
            currentVolume = currentHeight*currentWidth;
            if(maxVolume < currentVolume) {
                maxVolume = currentVolume;
            }
        }
        
    }

*/