/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    switchLettersFcn(0, s.length -1, s)
};

let switchLettersFcn = (left, right, s) => {
    if(left >=right) {
        return s;
    }
    
    [s[left], s[right]] = [s[right], s[left]];
    switchLettersFcn(left +1, right -1, s)
}