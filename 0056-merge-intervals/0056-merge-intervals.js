/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
thoughts: 
    1. try to solve with ON time complexity
        1.a) sort the array of intervals.
    2. firstNum and secondNum variables
    3. check if the interval before includes either firstNum or secondNum 
    4. If it doesn't contain that range we move on. 
*/

/*

  [ 0, 0 ], [ 1, 1 ], [ 2, 4 ], [ 2, 2 ], [ 3, 4 ], [ 3, 5 ], [ 4, 5 ], [ 4, 6 ]

*/
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    // console.log(intervals)
    // let resultArr = [];
    
    for(let i = 0; i < intervals.length -1; i++) {
        let first = i;
        let second = i+1;
        
        let firstStart = intervals[first][0]
        let firstEnd = intervals[first][1];
        // console.log("first start: ", firstStart)
        // console.log("first end: ", firstEnd)
        let secondStart = intervals[second][0];
        let secondEnd = intervals[second][1];
        // console.log("second start: ", secondStart)
        // console.log("second end: ", secondEnd)
        
        // console.log("intervals", intervals)
        if((firstEnd >= secondStart) && (firstEnd <= secondEnd)) {
                        // console.log(intervals[i])
            
            intervals[first] = [firstStart, secondEnd]
            intervals.splice(i+1,1)
            

            i--
            // console.log("herro", intervals)
        }
        
        if(firstEnd >= secondStart && firstEnd > secondEnd) {
            // console.log(intervals[i])
            intervals.splice(i+1,1)
            
            i--
            // console.log("When firstEnd is greater than secondEnd", intervals )
        }
        
    }
    // console.log(intervals)
    return intervals
};

/*
------------ PREVIOUS ATTEMPT ------------------
// console.log(intervals)
    intervals.sort((a,b) => a[0] - b[0])
    // console.log("sorted?", intervals)
    let returnMergedArrays = [];
    let currentMerge = [intervals[0][0], intervals[0][1]];
    
    for(let i = 1; i < intervals.length; i++) {
        let firstNum = intervals[i][0];
        let secondNum = intervals[i][1];
        // console.log(currentMerge[0])
        if ((currentMerge[0] < firstNum && firstNum < currentMerge[1]) || (currentMerge[0] < secondNum && secondNum < currentMerge[1]) ) {
            if(currentMerge[0] > firstNum) {
                currentMerge[0] = firstNum;
            }
            console.log(currentMerge[1], secondNum)
            if(currentMerge[1] < secondNum) {
                currentMerge[1] = secondNum 
                console.log("hi")
            }
            console.log("Current", currentMerge)
        } else {
            returnMergedArrays.push(currentMerge)
            currentMerge[0] = firstNum;
            currentMerge[1] = secondNum;
            console.log("return", returnMergedArrays)
        }
    }
    return returnMergedArrays
*/