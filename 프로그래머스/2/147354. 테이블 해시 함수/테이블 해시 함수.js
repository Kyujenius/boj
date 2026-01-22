function solution(data, col, row_begin, row_end) {
    var answer = 0;
    data.sort((a,b)=> {
        if(a[col-1]==b[col-1]){
            return b[0] - a[0];
        }else {
            return a[col-1]-b[col-1];
        }
    })
    
    const bit = [];
    data.forEach((arr,index)=> {
        let temp = 0;

        arr.forEach((value)=> {
            temp += value % (index+1)
        })
        bit.push(temp);
    })
    console.log(data);
    console.log(bit);
    for(let i= row_begin-1; i<row_end; i++) {
        answer = answer ^ bit[i];
        
    }
    return answer;
}

/**
3. 정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
4. row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
5. 테이블의 데이터 data와 해시 함수에 대한 입력 col, row_begin, row_end이 주어졌을 때 테이블의 해시 값을 return 하도록 solution 함수를 완성해주세요.

*/