/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const extraCandiesBoolean = [];

    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i]);
    }

    for (let i = 0; i < candies.length; i++) {
        const currentCandy = candies[i];
        if (currentCandy + extraCandies >= max) {
            extraCandiesBoolean.push(true)
        } else {
            extraCandiesBoolean.push(false)
        }
    }

    return extraCandiesBoolean
};