/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let one = 0
    let two = 1
    
    if(n === 0) {
        return 0
    }
    // console.log("n here", n)
    for(let i = 0; i < n -1; i++) {
    
        let temp = one + two;
    
        one = two;
        two = temp;
        // console.log("n",n);
        // console.log("one", one);
        // console.log("two", two)
    }

    return two;
    

};