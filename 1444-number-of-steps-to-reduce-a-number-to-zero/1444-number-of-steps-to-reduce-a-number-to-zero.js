/**
 * @param {number} num
 * @return {number}
 */

 // --- older solution ----
// let helper = (num, count) => {
//   if (num == 1) {
//     return count + 1
//   }
//   // check if num is odd / even
//   if (num % 2 == 0) { // EVEN
//     num = num/2;
//   }
//   else if (num % 2 == 1) { // ODD -- could just use else
//     num = num -1
//   }
//   // divide by 2 or subtract 1
//   return helper(num, count + 1)
// }

var numberOfSteps = function(num) {
    let count = 0;

    if (num === 0) {
        return 0
    }

    return operationForEvenOrOdd(num, count)
    function operationForEvenOrOdd(num, count) {
        // console.log("entered the recursion")
        if (num === 0) {
            // console.log("what is count", count)
            return count
        }

        if (num % 2 === 0) {
            // console.log("inside EVEN", count)
            return operationForEvenOrOdd(num/2, count + 1)
        } else {
            // console.log("inside ODD", count)
            return operationForEvenOrOdd(num - 1, count + 1)
        }
    }

}
    // ---- older solution ----
//   if(num === 0) {
//       return 0
//   }  
    
//   return helper(num, 0);

// ------ solution with group work NYC Coders ---
/*
if (n === 0) {
    return 0;
  }

  if (n % 2 === 0) {
    return 1 + helper(n / 2)
  } else {
    return 1 + helper(n - 1)
  }
  
}

return helper(num)

 function helper(n){

  
};
*/