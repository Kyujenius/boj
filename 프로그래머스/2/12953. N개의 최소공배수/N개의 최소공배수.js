function solution(arr) {
    var answer = 0;
    //모든 약수들이 들어가있고, 그 약수들 중 안 겹치게 곱하기만 하면 됨.
    //둘이 곱한 걸 최대공약수로 나누면, 최소공배수 => 
    return arr.reduce((acc, cur) => lcm(acc, cur));
}

function gcd(a,b) {
    // console.log("gcd : " , a,b)
    if(b === 0) {
        return a;
    }else{
        return gcd(b, a % b);        
    }
}

function lcm(a,b) {
    return (a*b) / gcd(a,b);
}