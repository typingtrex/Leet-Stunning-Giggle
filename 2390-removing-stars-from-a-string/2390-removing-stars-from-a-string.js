/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let returningStrArr = [];
    let arrStr = s.split("");
    console.log(arrStr);
    for (let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] !== "*") {
            returningStrArr.push(arrStr[i])
        } else {
            returningStrArr.pop();
        }
    }
    let returningString = returningStrArr.join("");
    console.log(returningString)
    return returningString;
};