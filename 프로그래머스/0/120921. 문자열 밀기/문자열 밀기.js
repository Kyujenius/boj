function solution(A, B) {
    if (A === B) return 0;
    let arr = A.split("");
    for (let i = 0; i < arr.length; i++) {
        arr.unshift(arr.pop());
        
        if (arr.join('') === B) {
            return i + 1;
        }
    }
    
    return -1;
}
