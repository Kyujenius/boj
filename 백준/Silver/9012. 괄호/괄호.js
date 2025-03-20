const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let j = 1; j < input.length; j++) {
        const stack = [];
        let isValid = true;
        
        for (let i = 0; i < input[j].length; i++) {
            if (input[j].charAt(i) == '(') {
                stack.push('(');
            } else {
                if (stack.length == 0) {
                    isValid = false;
                    break;
                } else {
                    stack.pop();
                }
            }
        }
    
        if (isValid && stack.length === 0) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }


