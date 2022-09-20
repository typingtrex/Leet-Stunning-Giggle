/**
 * @param {number} n
 * @return {number}
 */

// 0 1 1 2 3 5 8
// 0 1 2 3 4 5 6
var fib = function(n) {
    // ----- dynamic iteration ------
    let one = 0
    let two = 1
    
    if(n === 0) {
        return 0
    }
  
    for(let i = 0; i < n -1; i++) {
    
        let temp = one + two;
        
        one = two;
        two = temp;
        console.log("one", one, "two", two)
    }

    return two;

    // -----recursive ------
    //      // baseCase 
//     if(n === 0) {
//         return 0;
//     }
//     if(n === 1) {
//         return 1;
//     }
    
//     return fib(n -1) + fib(n -2)

    // ---- recursive with memo -------
    // , memo = {0:0, 1:1}
    // base case
    // if(memo[num]) {
    //     return memo[num];
    // } else {
    //     memo[num];
    //     fib(num -1, memo);
    //     memo[num] = memo[num -1] + memo[num -2];
    //     return memo[num];
    // }
};