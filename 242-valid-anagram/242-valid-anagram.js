/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// notes: create a hashmap of s characters with value for count
// use hashmap to check for t being the complete anagram

var isAnagram = function(s, t) {
    let hashmap = {};
    
    if(s.length !== t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        if(!hashmap[s[i]]) {
            hashmap[s[i]] = 1;
        } else {
            let count = hashmap[s[i]] +1;
            hashmap[s[i]] = count
         
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        let currLetter = t[i]; 
        
        if(!hashmap[currLetter]) {
            return false;
        } 
        
        

        if (hashmap[currLetter]) {
            // console.log(hashmap[currLetter])
            hashmap[currLetter] = hashmap[currLetter] -1;
            // console.log(currLetter, hashmap[currLetter])
        }
    }
    return true
};