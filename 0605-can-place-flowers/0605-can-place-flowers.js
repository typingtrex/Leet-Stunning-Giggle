/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
        return true;
    }

    // traverse through the flowerbed array and only n-- when the index -1 and +1 are 0 and the current i is 0
    for (let i = 0; i < flowerbed.length; i++) {
         if (n === 0) {
            return true;
        }
        
        // at 0 index
        if (i === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            i++;
            n--;
        }

        // at end of array index
        if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }

    //    console.log(flowerbed[i - 1], flowerbed[i], flowerbed[i + 1])
        // all other indices with a proper left and right
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== undefined && flowerbed[i + 1] !== undefined) {
            // console.log(flowerbed[i - 1], flowerbed[i], flowerbed[i + 1])
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                n--;
                flowerbed[i] = 1;
                i++;
            }
        } 

        // console.log("for loop n: ", n)
       
    }
    // console.log("n is: ", n)
    return n === 0
};