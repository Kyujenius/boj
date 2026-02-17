function solution(sticker) {
    var answer = 0;
    if (sticker.length === 1) return sticker[0];

    const dp1 = Array(sticker.length).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    const dp2 = Array(sticker.length).fill(0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    
    //첫 번째 것을 땔 경우
    for(let i =2; i<sticker.length-1; i++) {
        //i번째 스티커를 떼냐 vs 안 떼냐
        dp1[i] = Math.max(sticker[i] + dp1[i-2], dp1[i-1]);
    }
    
    //첫 번째 것을 안 뗄 경우
    for(let i =2; i<sticker.length; i++) {
        //i번째 스티커를 떼냐 vs 안 떼냐
        dp2[i] = Math.max(sticker[i] + dp2[i-2], dp2[i-1]);
    }
    console.log(dp1,dp2);
    answer = Math.max(dp1[sticker.length-2],dp2[sticker.length-1]);
    
    return answer;
}