/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashmap = {};
    
    // create a hashmap of letters and count
    for(let i = 0; i < s.length; i++) {
        if(hashmap[s[i]]) {
            hashmap[s[i]] = hashmap[s[i]] + 1;
        } else {
            hashmap[s[i]] = 1;
        }
    }
    
    // const countOne = Object.values(hashmap).find(val => val === 1);
    // if(countOne) {
    // }
    
     let firstInstance = Object.keys(hashmap).find(key => hashmap[key] === 1)
    console.log("letter: ", firstInstance);
    
    if (firstInstance) {
        for(let i = 0; i < s.length; i++) {
            if (firstInstance === s[i]) {
                return i
            }
        }
    } else {
        return -1
    }
    
};