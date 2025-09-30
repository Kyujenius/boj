function solution(n) {
    var answer = 0;
    let a = 1;
    let b = 2;
    let temp = 0;
    if(n == 1 || n == 2) {
        return n;
    }else {
        for(let i = 3; i<=n; i++) {
            temp = (a+b) %1234567;
            a=b
            b=temp;
        }
    }
    answer = temp;
    return answer;
}