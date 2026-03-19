function solution(k, d) {
    var answer = 0;
    const length = d/k;
    // console.log(length);
    for(let i=  0 ; i<=length; i++) {
       answer += Math.floor(Math.sqrt(Math.pow(length,2) - Math.pow(i,2))) +1
    }
    return answer;
}