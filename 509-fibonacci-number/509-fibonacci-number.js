/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // ----- dynamic iteration ------
//     let one = 0
//     let two = 1
    
//     if(n === 0) {
//         return 0
//     }
  
//     for(let i = 0; i < n -1; i++) {
    
//         let temp = one + two;
    
//         one = two;
//         two = temp;
     
//     }

//     return two;
     // baseCase 
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    
    return fib(n -1) + fib(n -2)

};