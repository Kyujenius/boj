function solution(numbers, target) {
    var answer = 0;
    function dfs(index,acc){
        const plusAcc = acc + numbers[index];
        const minusAcc = acc - numbers[index];
        if(index == numbers.length) {
            if(acc == target) {
                answer++;
            }
        }else {
            dfs(index+1, plusAcc);
            dfs(index+1, minusAcc);
        }
    }
    dfs(0,0);
    return answer;
}