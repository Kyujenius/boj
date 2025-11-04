function solution(numbers, target) {
    var answer = 0;
    function dfs(index, currentSum) {
        if(index !== numbers.length-1) {
            dfs(index+1, currentSum + numbers[index]);
            dfs(index+1, currentSum - numbers[index]);    
        }else {
            if(currentSum + numbers[index] == target) {
            answer++;
            }
            if(currentSum -numbers[index] == target) {
                answer++;
            }
        }
        
    }
    dfs(0,0)
    return answer;
}