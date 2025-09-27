function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++) {
        let counter = 0;
        if(i >= n/2) {
            answer++;
            break;
        }
        
        for(let j = i; j<=n; j++) {
            // console.log(`i: ${i}, j: ${j}, counter: ${counter}`);
            counter +=j;
            if(counter == n) {
                answer++;
                break;
            }else if(counter > n) {
                // console.log("pass");
                break;
            }
        }

        
    }
    return answer;
}