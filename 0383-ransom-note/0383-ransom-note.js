/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    // if (ransomNote.length > magazine.length) {
    //     return false
    // }
    // let magazineLetters = {};

    // for (let i = 0; i < magazine.length; i++) {
    //     let currChar = magazine[i];
    //     console.log("character: ", currChar)
    //     if (magazineLetters[currChar]) {
    //         magazineLetters[currChar] = magazineLetters[currChar] + 1;
    //     } else {
    //         magazineLetters[currChar] = 1;
    //     }

    //     // console.log(magazineLetters)
    // }

    //  for (let i = 0; i < ransomNote.length; i++) {
    //     let currChar = ransomNote[i];

    //     if (magazineLetters[currChar]) {
    //         magazineLetters[currChar] = magazineLetters[currChar] - 1;
    //     } else {
    //         return false;
    //     }

    // }

    // return true;

    const charCounter = getCharCount(magazine);
    return canMakeNoteFromDictionary(ransomNote, charCounter); 
}

const getCharCount = (str) => { 
    let dictionary = {};

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        dictionary[currChar] = dictionary[currChar] 
            ? dictionary[currChar] + 1 
            : 1; 
    }
    return dictionary; 
}
const canMakeNoteFromDictionary = ( str, dict ) => {
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (dict[currChar]) {
            dict[currChar] = dict[currChar] - 1;
        } else {
            return false;
        }
    }
    return true; 
}

/*
// -------- previous solution --------------

var canConstruct = function(ransomNote, magazine, bookTitle) {
     if (ransomNote.length > magazine.length) return false;
    
    let magazineLetters = {};
    
    for (let letter of magazine) {
        magazineLetters[letter] = (magazineLetters[letter] || 0) + 1;
    }
    
    for (let letter of ransomNote) {
        if ((magazineLetters[letter] || 0) < 1) {
            return false;
        }
        
        magazineLetters[letter]--;
    }
    
    return true;
};
*/