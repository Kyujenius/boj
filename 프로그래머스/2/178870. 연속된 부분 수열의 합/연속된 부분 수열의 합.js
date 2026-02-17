function solution(sequence, k) {
    var answer = [];
    let leftPtr = 0;
    let rightPtr = 0;
    let count = sequence[0];
    let candidate = []
    while(leftPtr <= rightPtr && rightPtr < sequence.length) {
        //count 라는 값이 k 랑 같으면 스탑하면 안되고, cadidate 에 추가해야죠
        if(count === k) {
            candidate.push({distance : rightPtr-leftPtr, ptr: [leftPtr,rightPtr]});
            rightPtr++;
            count += sequence[rightPtr];
        }else if(count < k) {
            //k보다 작으면 오른쪽 포인터를 이동시키기
            rightPtr++;
            // console.log(`count(${count}) < k(${k}) : count 증가 : ${sequence[rightPtr]}`)
            count += sequence[rightPtr];

        }else if(count > k) {
            // console.log(`count(${count}) > k(${k}) : count 감소 : ${count}`)
            count -= sequence[leftPtr];
            leftPtr++;
        }
    }
    // console.log(candidate);
    
    const candidateEntry = Object.entries(candidate);
    // console.log(candidateEntry);
    candidateEntry.sort((a,b)=> {
        if(a[1].distance === b[1].distance) {
            return a[1].ptr[0] - b[1].ptr[0];
        }
        return a[1].distance - b[1].distance;
    })
    
    answer = candidateEntry[0][1].ptr;
    return answer;
}

//투 포인터 문제다!

//