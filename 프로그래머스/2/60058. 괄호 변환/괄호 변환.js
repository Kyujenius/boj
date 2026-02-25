function solution(p) {
    let balance = 0;
    let u = "";
    let v = "";
    // 1번
    if(p == "") return "";
    
    // 2번
    for(let i = 0; i<p.length; i++) {
        if(p[i]=== '(') {
            balance++;
        }else {
            balance--;
        }
        if(balance === 0) {
            u = p.slice(0,i+1);
            v=  p.slice(i+1);
            break;
        }
    }

    if(isCorrect(u)) {
        return u + solution(v);
    }else {
        let answer = "(";
        answer += solution(v);
        answer += ")";
        
        let newU = u.slice(1,-1).split("").map(char => {
            return char === "(" ? ")" : "("
        }).join("");
        
        return answer + newU;
    }
}

function isCorrect(u) {
    let isCorrect = true;
    const stack = [];

    for(let i = 0 ; i<u.length; i++) {

        if(u[i] === "(") {
            stack.push("(");
        }else {
            if(stack.length > 0) {
                stack.pop();    
            }else {
                isCorrect = false;
                break;
            }
        }
    }

    return isCorrect;
}