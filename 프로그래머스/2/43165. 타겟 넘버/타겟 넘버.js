function solution(numbers, target) {
    var answer = 0;
    function dfs(index, sum) {
        if(index == numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        const plus = sum + numbers[index];
        const minus = sum - numbers[index];
        
        dfs(index+1, plus);
        dfs(index+1, minus);
    }
    
    dfs(0,0);
    return answer;
}