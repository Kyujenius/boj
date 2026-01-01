function solution(sticker) {
    var answer = 0;
    const n = sticker.length;
    if(n ===1) return sticker[0];
    //첫 번 째 것을 뜯은 경우
    const dp1 = Array(n).fill(0);
    
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    for(let i = 2; i<n-1; i++) {
        dp1[i] = Math.max(sticker[i] + dp1[i-2], dp1[i-1]);    
    }
    
    //
    const dp2 = Array(sticker.length).fill(0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    
    for(let i = 2; i<n; i++) {
        dp2[i] = Math.max(sticker[i] + dp2[i-2], dp2[i-1]);    
    }
    
//     console.log(dp1);

//     console.log(dp2)
    
    answer = Math.max(dp1[n-2],dp2[n-1])

    return answer;
}