function solution(s){
    var answer = true;

    const new_stack = [];
    

    for(let i = 0 ; i<s.length; i++) {
        if(s[i] == ")") {
            const result = new_stack.pop();
            if(result == undefined) {
                answer = false;
                break;
            }
        }else {
            new_stack.push("a")
        }
    }
    if(new_stack.length>0) {
        answer = false;
    }

    return answer;
}