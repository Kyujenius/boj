function solution(scores) {
    var answer = 1;
    const wanho = scores[0];
    const wanhoScore = wanho[0] + wanho[1];
    
    scores.sort((a,b)=> {
        if(a[0] === b[0]) {
            return a[1] - b[1]
        }
        return b[0] - a[0];
    })
    
    console.log(scores);
    
    // 태도 점수로 일단 내림차순 정렬 -> 같으면 동료 평가 점수로 오름차순
    let maxPeer = 0;

    for(let i = 0; i<scores.length; i++) {
        const score = scores[i];
        const [attitude, peer] = score;
        //이전 태도점수보다도 작고, 동료평가중 하나라도 작으면 그놈은 제외하지, 근데 그게 원호야? 그럼 -1이야.
        if(maxPeer > peer) {
            if(score == wanho) {
                return -1;
            }
            continue;
        }
        if(attitude+peer > wanhoScore) {
            answer++;
        }
        maxPeer = Math.max(maxPeer,peer);
        // console.log(`now: ${scores[i]}, answer: ${answer}`);

    }
    
    return answer;
}