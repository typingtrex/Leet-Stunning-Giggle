/**
 * @param {string} s
 * @return {boolean}
 */
// thoughts: subfunctions to check the different parenthesis?
// use stacks

/*
var isValid = function(s) {
    const matchingParenthesis = {
        "]" : "[",
        "}" : "{",
        ")" : "(",
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // console.log("this is char ", char)
        // console.log("checking: ", char in matchingParenthesis)
        if (char in matchingParenthesis) {
            if (stack[stack.length - 1] === matchingParenthesis[char]) {
                stack.pop();
            } else {
                return false;
            }
            
        } else {
            stack.push(char);
        
        }
     
    }

    return stack.length === 0;
};
*/

/*  ---------- solution from 01/2023 using if/else -----------

let openParens = 0;
    const stackOfParens = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            openParens++;
            stackOfParens.push(s[i]);
        }
        if (s[i] === ")") {
            if (stackOfParens[stackOfParens.length - 1] === "(") {
                stackOfParens.pop();
                openParens--;
            } else {
                // what if 
                // ["(", "[", ")", "]"]
                return false;
            }
        };

        if (s[i] === "]") {
            if (stackOfParens[stackOfParens.length - 1] === "[") {
                stackOfParens.pop();
                openParens--;
            } else {
                // what if 
                // ["(", "[", ")", "]"]
                return false;
            }
        }

        if (s[i] === "}") {
            if (stackOfParens[stackOfParens.length - 1] === "{") {
                stackOfParens.pop();
                openParens--;
            } else {
                // what if 
                // ["(", "[", ")", "]"]
                return false;
            }
        }
    }

    if (openParens !== 0) {
        return false;
    } else {
        return true;
    }
*/

// previous solution from months back: 
var isValid = function(s) {
//  if close parenthesis comes first, output = false
//     if open bracket, push to stack
//     if close bracket, check last one in stack -> 
//          if last one does not corespond to open bracket, return false
//          if last one does correspond to open bracket -> 
//          stack.pop()



//     // after loop done   

//     if (stack.length) {
//          return false;
//     }
//     else {
//     return true
//     }
    
    // Time complexity: ON 1
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
}
