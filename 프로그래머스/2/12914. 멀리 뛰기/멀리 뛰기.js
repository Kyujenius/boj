function solution(n) {
    var answer = 0;
    //f(n-2)역할이 a
    let a = 1;
    //f(n-1)역할이 b
    let b = 2;
    //f(n) 역할이 temp
    let temp = 0;
    if(n == 1 | n == 2) {
        return n;
    }else {
        for(let i = 3; i<=n; i++) {
            temp = (a+b)% 1234567;
            a = b;
            b = temp ;
            console.log(`${i}번째 값: a : ${a}, b: ${b}, temp: ${temp}`);
        }    
    }
    
    return b;
}