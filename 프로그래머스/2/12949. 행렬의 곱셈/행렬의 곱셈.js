function solution(arr1, arr2) {
    const answer = Array(arr1.length).fill(0).map(() => Array(arr2[0].length).fill(0));

    // i: arr1의 행 인덱스
    for (let i = 0; i < arr1.length; i++) {
        // j: arr2의 열 인덱스
        for (let j = 0; j < arr2[0].length; j++) {
            // k: 내적(dot product)을 위한 인덱스
            for (let k = 0; k < arr1[0].length; k++) {
                // answer[i][j]는 arr1의 i행과 arr2의 j열의 내적입니다.
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return answer;
}