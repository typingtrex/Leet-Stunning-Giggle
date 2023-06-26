/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.values = [];
    this.sum = 0;
    this.size = size;
    // treat values like a queue

    // --- CJ approach ----
    /*
    hold onto size that it is 
    have an empty array
    keep track of current sum 
    */
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    
    // --- CJ approach ---
    /*
    1. check if size of array is less than window size 
        if smaller then don't shift
        else shift and decrement sum by num that is shifted
    2. push the value in
    3. add the value to the current sum
    4. return the average
    */
    if (this.values.length >= this.size) {
        const removeNum = this.values[0];
        this.sum -= removeNum;
        this.values.shift()
    }

    this.values.push(val)
    this.sum += val

    return this.sum/this.values.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */