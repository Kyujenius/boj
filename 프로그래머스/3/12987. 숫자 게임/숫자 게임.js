function solution(A, B) {
    var answer = 0;
    A.sort((a,b) =>  b-a)
    B.sort((a,b) =>  b-a)
    let leftIndex = 0;
    let rightIndex = B.length-1;
    let count =0 ;
    while(leftIndex <= rightIndex) {
        if(A[count] < B[leftIndex]) {
            // console.log(count, leftIndex,A[count], B[leftIndex]);
            answer++;
            leftIndex++;
        }else {
            rightIndex--;
        }
        count++;
    }
    return answer;
}