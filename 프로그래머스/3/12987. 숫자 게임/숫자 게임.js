function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    console.log(A,B);
    let aIndex = 0;
    let leftIndex = 0;
    let rightIndex = B.length-1;
    
    //안되면 비길 때도 고려해야함
    while(leftIndex <= rightIndex) {
        //B가 더 클 때,
        if(A[aIndex] < B[leftIndex]) {
            // console.log("B가 더커");
            leftIndex++;
            answer += 1;
        }else {
            if(A[aIndex] >= B[rightIndex]){
                // console.log("A가 더 크거나 같아버려");
                rightIndex--;
            }else {
                rightIndex--;
                answer+= 1;
            }
        }
        //언제나 aIndex 는 증가함.
        aIndex++;
    }
    return answer;
}