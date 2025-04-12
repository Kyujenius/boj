function solution(arr, query) {
    let changingArr = arr.slice(); // 원본 배열 복사
    
    for(let i = 0; i < query.length; i++) {
        const value = query[i];
        
        // 짝수 인덱스일 때 (0부터 시작하므로 i % 2 == 0)
        if(i % 2 === 0) {
            // 뒷부분 자르기: 0부터 value까지 유지
            changingArr = changingArr.slice(0, value + 1);
        } else {
            // 앞부분 자르기: value부터 끝까지 유지
            changingArr = changingArr.slice(value);
        }
    }
    
    return changingArr;
}
