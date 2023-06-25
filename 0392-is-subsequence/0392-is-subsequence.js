/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    sIdx = 0;

    for (let i = 0; i < t.length; i++) {
        let currCharS = s[sIdx]

        if (currCharS === t[i]) {
            sIdx++
        }
    }

    if (sIdx === s.length) {
        return true;
    }

    return false;
};