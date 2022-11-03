/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if(text.length < 7) {
        return 0;
    }
    let freqmap = {};
    
    for(let i = 0; i < text.length; i++) {
        if(freqmap[text[i]]) {
            freqmap[text[i]] = freqmap[text[i]] +1;
        } else {
            freqmap[text[i]] = 1;
        }
    }
    let count = 0;
    console.log("freq maaap", freqmap)
    let checkBalloon = () => {
        let balloon = "balloon"
        for(let j = 0; j < balloon.length; j++) {
            if(freqmap[balloon[j]]) {
                freqmap[balloon[j]] = freqmap[balloon[j]] -1;
            } else {
                return count
            }
        }
        count++ 
        if(freqmap[balloon[0]]) {
            checkBalloon()
        }
    }
    checkBalloon()
    return count
};