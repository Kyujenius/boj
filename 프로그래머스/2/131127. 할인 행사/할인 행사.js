function solution(want, number, discount) {
    let answer =0;
    const slidingWindowSize =10;
    const wantObj = {};
    want.forEach((value,index,array) => {
            wantObj[value] = number[index];
    });
    for(let j=0; j<=discount.length-10; j++){
        let wantObjClone = {...wantObj};
        for(let i = 0 ; i<slidingWindowSize; i++) {
            wantObjClone[discount[j+i]] -= 1; 
        }
        const isPerfectMatch = Object.values(wantObjClone).every(value => value <=0);
        
        // 4. 만약 완벽하게 일치한다면, 정답 카운트를 1 올립니다.
        if (isPerfectMatch) {
            answer++;
        }
    }
    return answer;
}