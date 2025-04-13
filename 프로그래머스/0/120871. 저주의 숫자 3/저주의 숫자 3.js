function solution(n) {
    var answer = 1;
    // 1,2,4,5,7,8,10,11,13,14,16,17
    for(let i = 0;  i<n; i++) {
        console.log(answer, answer.toString().split("").includes("3") || answer % 3 == 0 )
        if(answer % 3 == 0 || answer.toString().split("").includes("3")) {
            answer += 1       
            i--;
        }else {
            answer += 1
        }
    }
    return answer-1;
}