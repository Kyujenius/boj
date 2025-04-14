function solution(balls, share) {
    var answer = 0;
    let ball = 1;
    let shared = 1;

    for(let i = 0; i<share; i++) {
        ball = ball * (balls - i);
    }
    for(let i = 0 ; i<share; i++) {
        shared = shared * (share-i)
    }
    answer = ball / shared;
    return answer;
}