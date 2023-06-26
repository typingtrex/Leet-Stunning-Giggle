/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.values = new Array(size).fill(null);
  
    console.log("MA: " , this.values)
    // treat values like a queue
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    // return average with the val given and any previous numbers that fit the window
    this.values.shift();
    this.values.push(val);
    let sum = 0;
    let numCount = 0;
    for (let i = 0; i < this.values.length; i++) {
        sum += this.values[i];

        if (Number.isInteger(this.values[i])) {
            numCount++;
        }
    }
   
  
    return sum/numCount

};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */