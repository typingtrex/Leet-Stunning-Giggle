/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(array) {
    
    let largest = array.length;	//5
	let sum = largest * ((largest+ 1)/2);
    // for (let i = 0; i <= largest; i++) {
    // sum += i // 15
    // };
    // console.log(largest * ((largest+ 1)/2), sum)
    for (let i = 0; i < array.length; i++) {
	    sum -= array[i]; 
    }
    
    return sum; //3
    
    // ----- cycle sort method ---- TRY IT!
};