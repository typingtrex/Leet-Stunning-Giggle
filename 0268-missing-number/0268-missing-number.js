/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(array) {
    const greatestNum = array.length;
    let sum = 0;
    // total sum
    for (let i = 0; i <= greatestNum; i++) {
        sum += i;
    }
    // find missing num
    for (let i = 0; i < array.length; i++) {
        sum -= array[i]
    }

    return sum;
};

// older attempt: 
/*
var missingNumber = function(array) {
    // let sum = 0; 
    let largest = array.length;	//5
	// let sum = largest * ((largest+ 1)/2);
    for (let i = 0; i <= largest; i++) {
    sum += i // 15
    };
    console.log(largest * ((largest+ 1)/2), sum)
    for (let i = 0; i < array.length; i++) {
	    sum -= array[i]; 
    }
    
    return sum; //3
    
    // ----- cycle sort method ---- TRY IT!
};
*/