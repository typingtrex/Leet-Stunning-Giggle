/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// notes: create a hashmap of s characters with value for count
// use hashmap to check for t being the complete anagram

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sDict = createDictionary(s);
    console.log(sDict)
    
    for (let i = 0; i < t.length; i++) {
        const currChar = t[i];

        if (sDict[currChar]) {
            // console.log("before: ", sDict[currChar])
            sDict[currChar]--
            // console.log("after: ", sDict[currChar])
        } else {
            return false
        }
    }

    let arrayOfCount = Object.values(sDict);
    for (let i = 0; i < arrayOfCount.length; i++) {
        if (arrayOfCount[i] !== 0) {
            return false
        }
    }
    /*
    // does not work because the order is different....
    if (sDict == tDict) {
        return true;
    }
    */

    return true;
};

const createDictionary = (str) => {
    const dict = {};
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        // if (dict[currChar]) {
        //     dict[currChar]++;
        // } else {
        //     dict[currChar] = 1;
        // }
        // --- Same as above ----
        dict[currChar] ? dict[currChar]++ : dict[currChar] = 1;
    }

    return dict;
}



/* ------ December 2021 solution -----
 let arrS = s.split("").sort().join("");
    let arrT = t.split("").sort().join("");

    
    return arrS == arrT
*/


// -------------- previous ---------
  // let hashmap = {};
    
    // if(s.length !== t.length) return false;
    
    // for (let i = 0; i < s.length; i++) {
    //     if(!hashmap[s[i]]) {
    //         hashmap[s[i]] = 1;
    //     } else {
    //         // let count = hashmap[s[i]] +1;
    //         // hashmap[s[i]] = count
    //         hashmap[s[i]]++
         
    //     }
    // }
    
    // for (let i = 0; i < t.length; i++) {
    //     let currLetter = t[i]; 
        
    //     if(!hashmap[currLetter]) {
    //         return false;
    //     } 
        
        

    //     if (hashmap[currLetter]) {
    //         // console.log(hashmap[currLetter])
    //         // hashmap[currLetter] = hashmap[currLetter] -1; below is the same
    //         hashmap[currLetter]--
    //         // console.log(currLetter, hashmap[currLetter])
    //     }
    // }
    // return true