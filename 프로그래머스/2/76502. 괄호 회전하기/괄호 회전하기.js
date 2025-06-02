function solution(s) {
    const sArray = s.split("");
    const N = sArray.length;
    let count = 0;
    
    for(let i = 0; i < N; i++) {
        const arr = [];
        let isValid = true;
        
        for(let j = 0; j < N; j++) {
            const c = sArray[(i+j) % N];
            const result = commander(arr, c);
            if(result == false) {
                isValid = false;
                break;
            }
        }
        
        // 모든 문자를 처리한 후 배열이 비어있어야 올바른 괄호 문자열
        if(isValid && arr.length === 0) {
            count++;
        }
    }
    
    return count;
}

function commander(arr, c) {
    if(c == "[" || c == "(" || c == "{") {
        arr.push(c);
        return true;
    } else {
        const top = arr[arr.length-1];
        if((top == "[" && c == "]") || 
           (top == "{" && c == "}") || 
           (top == "(" && c == ")")) {
            arr.pop();
            return true;
        } else {
            return false;
        }
    }
}
