/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // if close parenthesis comes first, output = false
    // if open bracket, push to stack
    // if close bracket, check last one in stack -> 
    //      if last one does not corespond to open bracket, return false
    //      if last one does correspond to open bracket -> 
    //      stack.pop()



    // // after loop done   

    // if (stack.length) {
    //      return false;
    // }
    // else {
    // return true
    // }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let currentParens = s[i];
        
        if (currentParens === "(" || currentParens === "{" || currentParens === "[") {
            stack.push(currentParens)
        } else if (stack[stack.length -1]){
            if (currentParens === ")") {
                if (stack[stack.length -1] === "(") {
                    stack.pop();
                } else {
                    return false;
                }
            } 
            if (currentParens === "}") {
                if (stack[stack.length -1] === "{") {
                    stack.pop();
                } else {
                    return false;
                }
            } 
            if (currentParens === "]") {
                if (stack[stack.length -1] === "[") {
                    stack.pop();
                } else {
                    return false;
                }
            } 
        } else {
                return false
            }
    }
    
    // check if any remaining open parens in stack
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};