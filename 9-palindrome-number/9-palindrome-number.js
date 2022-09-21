/**
 * @param {number} x
 * @return {boolean}
 */

// use 2 pointer and while p1 < p2 we keep checking, once outside the while loop we can return true 

var isPalindrome = function(x) {
    const xStr = x.toString()
    
    let p1 = 0;
    let p2 = xStr.length -1;
    
    while(p1 < p2) {
       
        if(xStr < 10 && xStr > -1  ) {
            return true;
        }
        
        if (xStr[p1] !== xStr[p2]) {
            return false;
        }
        
        p1++
        p2--
    }
    
    return true
};