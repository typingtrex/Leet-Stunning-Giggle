/**
 * @param {number} x
 * @return {boolean}
 */

// use 2 pointer and while p1 < p2 we keep checking, once outside the while loop we can return true 

var isPalindrome = function(x) {
    // -------- converting int to string -----
    /*
    const xStr = x.toString()
    
    let p1 = 0;
    let p2 = xStr.length -1;
    
    while(p1 < p2) {
        
        if (xStr[p1] !== xStr[p2]) {
            return false;
        }
        
        p1++
        p2--
    }
    
    return true
    */
    
    // without converting to string need to divide by 10 and use the remainder as the ones, tens, hundreds, etc. into an array
    if(x < 0) return false;
    
    let arrOfDigits = [];
    
    while(x > 0) {
        let endDigit = x % 10;
        // console.log(endDigit)
        x = Math.floor(x/10) 
        arrOfDigits.unshift(endDigit)
    }
    
    while (arrOfDigits.length) {
        if(arrOfDigits.length === 1) return true
        
        let p1 = arrOfDigits.shift();
        let p2 = arrOfDigits.pop();
        console.log(p1, p2)
        if (p1 !== p2) return false;
    }
    
    return true;
};