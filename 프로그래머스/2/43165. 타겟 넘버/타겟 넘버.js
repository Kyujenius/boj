function solution(numbers, target) {
    let answer =0 ;
    
    function dfs(acc, index) {
        const plus = acc+numbers[index];
        const minus = acc-numbers[index];
        if(index == numbers.length-1) {
             if(plus == target) {
                answer++;                 
             }else if (minus == target){
                 answer++;
             }
        }else {
            dfs(plus, index+1);
            dfs(minus, index+1);
        }
    }
    
    dfs(0,0);

    return answer;
}