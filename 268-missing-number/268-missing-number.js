/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(array) {
    let sum = 0;
    let largest = array.length;	//5
	
    for (let i = 0; i <= largest; i++) {
	    sum += i // 15
    };

    for (let i = 0; i < array.length; i++) {
	    sum -= array[i]; 
    }

    return sum; //3
    
    // ----- cycle sort method ---- TRY IT!
};