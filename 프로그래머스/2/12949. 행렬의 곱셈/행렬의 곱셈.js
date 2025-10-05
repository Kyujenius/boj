function solution(arr1, arr2) {
    var answer = Array(arr1.length).fill(0).map(()=> {return Array(arr2[0].length).fill(0)});
    for (let i = 0; i < arr1.length; i++) {
        // j: 결과 행렬의 열
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0; // answer[i][j]의 값을 계산하여 담을 변수
            // k: 점곱(dot product) 계산을 위한 인덱스
            for (let k = 0; k < arr1[0].length; k++) {
                // arr1의 i행과 arr2의 j열의 원소들을 순차적으로 곱하고 더한다.
                sum += arr1[i][k] * arr2[k][j];
            }
            // 계산된 합계를 결과 행렬의 올바른 위치에 할당
            answer[i][j] = sum;
        }
    }
    return answer;
}