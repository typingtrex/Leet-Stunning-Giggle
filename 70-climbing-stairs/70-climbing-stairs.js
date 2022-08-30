/**
 * @param {number} n
 * @return {number}
 */
// depth first search (from 0 to 5)
// to eliminate decision trees O(N)
// caching result -- memoization 
// gonna do bottomUP 
/*
    
*/
var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    
    for (let i = 0; i < n; i++) {
       
        let temp = one;
        one += two;
        two = temp;
        console.log("hi", one, two)
    }
    
    return two
};

