/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  // steps: 
  // 1. loop through the first word1 and word2 to create second merged word

    let index = 0;
    let mergedString = "";
    
    while (index < word1.length || index < word2.length) {
        if (index < word1.length && index < word2.length) {
            console.log("merged, word1, word2", mergedString, word1[index], word2[index])
            mergedString += word1[index] + word2[index]
            console.log("after merged, word1, word2", mergedString, word1[index], word2[index])
        } else if (index < word1.length && index >= word2.length) {
            mergedString += word1[index];
        } else if (index < word2.length && index >= word1.length) {
            mergedString += word2[index];
        }
        
        index++
    }
    return mergedString
};