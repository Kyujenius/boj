function solution(diffs, times, limit) {
    var answer = 0;
    let left = 1; 
    let right = 300000;
    while(left <= right) {
        // console.log(left,right);
        let level = Math.floor((left+right)/2);
        let count = 0;
        diffs.forEach((diff,index)=> {
            if(level >= diff) {
                count += times[index];
            }else {
                count += (diff-level) * (times[index] + times[index-1]) + times[index];
            }
        })
        if(count <= limit) {
            answer = level;
            right = level-1;
        }else {
            left = level+1;
        }
    }
    return answer;
}

//diff -level 번 틀리는데, 그 때마다 time_cur 만큼의 시간을 쓰고, 추가로 time_prev 만큼의 시간을 써서 이전 퍼즐을 풀고 와야함. 

// 즉 (diff-level) * (time_cur + time_prev) + time_cur

//제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 합니다. 난이도, 소요 시간은 모두 양의 정수며, 숙련도도 양의 정수여야 합니다.


// 아무래도 이분 탐색이어야 할 거 같음. 그러나 수를 언제까지로 놔야할지가 조금 헷갈리는 상황
