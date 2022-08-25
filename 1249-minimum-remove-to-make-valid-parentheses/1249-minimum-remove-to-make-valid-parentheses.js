/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
            if(char === ")") {
                if (count > 0) {
                    count--;
                    stack.push(")")
                }
            } else if(char === "(") {
                count++;
                stack.push("(");
            } else {
                    stack.push(char);
            }
     }
    
    
    count = 0;
    let str = "";
    
    while (stack.length > 0) {
        const char = stack.pop();
        
        // working backwards -- so adding ")" does not need a check, but adding "(" does need a check
        if (char === "(") {
            if (count > 0) {
                count--;
                str = char + str; // always adding to the front of the string
                }
        } else if(char === ")") {
                count++;
                str = char + str;
        } else {
                str = char + str; //letters
        }
    }
     
    return str;
}

/*
------first attempt while pairProgramming with Pam 8.25.2022 -----------

var minRemoveToMakeValid = function(s) {
    let result = '';
    let openParens = []; // [3]
    let closeParens = [];
    let earlyCloseParens = []; // [2, 3, 6]
    let frontPart = '';
    let endPart = '';

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        // if(currentChar !== "(" && currentChar !== ")") {
        //     // result += currentChar // adding letters
        // }
        if (currentChar === ')' && openParens.length === 0) {
            earlyCloseParens.push(i);
        }
        if (currentChar === '(') {
            openParens.push(i);
            if (closeParens.length > 0) {
                openParens.pop();
                closeParens.pop();
            }
        }
        if (currentChar === ')' && openParens.length > 0) {
            closeParens.push(i);
            openParens.pop();
            closeParens.pop();
        }
    };
    console.log("number of extra closeParens", closeParens.length);
    console.log("number of extra openParens", openParens.length);
    console.log("number of extra closeParens in earlyClose", earlyCloseParens.length);
    if (earlyCloseParens) {
        console.log('earlyCloseParens', earlyCloseParens);
        for (let j = 0; j < earlyCloseParens.length; j++) { // index 2 
            let currentIndex = earlyCloseParens[j]
            frontPart = s.slice(0, currentIndex);
            endPart = s.slice(currentIndex+2);
            result = frontPart + endPart;
            console.log("front part of result", frontPart)
            console.log("end part of result", endPart)
        }
    }

    return result;
};
*/