function solution(arr1, arr2) {
    const M = arr1.length;
    const N = arr1[0].length;
    const L = arr2[0].length;
    let answer = Array.from(Array(M), () => new Array(L));


    for(let i = 0 ; i<M; i++) {
        for(let k = 0; k <L; k++) {
            // N 번 계산하기
            let result = 0;
            for(let j = 0; j < N; j ++) {
                result += arr1[i][j] * arr2[j][k];
            }
            answer[i][k] = result;
        }
    }
    return answer;
}