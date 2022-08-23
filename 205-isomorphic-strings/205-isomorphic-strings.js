/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let letterPairing = {};
    for (let i = 0; i < s.length; i++) {
        let currentSLetter = s[i];
        let currentTLetter = t[i];
        if (!letterPairing[currentSLetter]) {
            
            // make sure that the value is not being used in a different key
            let allTheValues = Object.values(letterPairing);
            for(let j = 0; j < allTheValues.length; j++) {
                let currentValue = allTheValues[j];
                if(currentValue === currentTLetter) {
                    // console.log("value", currentValue);
                    // console.log("currentT", currentTLetter);
                    // console.log("are we in the value check??")
                    return false;
                }
            }          
            //console.log("allTheValue: ", allTheValues);
            
            
            letterPairing[currentSLetter] = currentTLetter;
            // object dot notion is for calling that specific key -- therefore need bracket notation
            
            // console.log("letterPairing is:", letterPairing)
            
        } else {
             if (currentTLetter !== letterPairing[currentSLetter]) {
            // this is when 1 character is replaced by 2 characters
            return false;
            }  
        }
    }
    return true;
};

/*
pseudo code:
    look at each character in the s string 
    separate iteration with t string (same index for both strings)
    object {} pairings for s and t to check -- use if to check if the key exists in the object
    -------------- 
        s = "egg" 
        t = "add"
        checkList = 
        {
            e: a,
            g: d,
        }
        index 2 "g" is in checkList, but "d" === "d" therefore continue and if loop is complete return true
        
        ----------------------------------------------------
        
        s = "foo"
        t = "bar"
        checkList = 
        {
            f: b,
            o: a,
        }
        index 2 "o" is in checkList, but "a" !== "r" therefore return false
    
*/

/*
edge cases: 
Input: s = "egg", t = "dad"
Output == ??? false -- it is FALSE!!!
possibly true 
*/

/*
letterPairing is: { b: 'b' }
letterPairing is: { b: 'b', a: 'a' }
letterPairing is: { b: 'b', a: 'a', d: 'b' }
letterPairing is: { b: 'b', a: 'a', d: 'b', c: 'a' }
*/

/*
----- figure out if I can return anything from forEach ----------------

let allTheValues = Object.values(letterPairing);
            allTheValues.forEach(value => 
                                {if(value === currentTLetter) {
                                    console.log("value", value);
                                    console.log("currentT", currentTLetter);
                                    console.log("are we in the value check??")
                                    return false;
                                }})
            //console.log("allTheValue: ", allTheValues);
*/