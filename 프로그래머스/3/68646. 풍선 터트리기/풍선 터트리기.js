function solution(a) {
    var answer = 0;
    const leftSmallest = [];
    const rightSmallest = [];
    let left = Infinity;
    let right = Infinity;
    for(let i =0; i<a.length; i++) {
        if(a[i] < left) {
            leftSmallest.push(a[i]);
            answer++;
            left = a[i]
        }else {
            leftSmallest.push(left);
        }
        
    }
    for(let i =a.length-1; i>=0; i--) {
        if(a[i] <right) {
            answer++;
            rightSmallest.push(a[i]);
            right=a[i];
        }else {
            rightSmallest.push(right);    
        }
        
    }
    console.log(leftSmallest,rightSmallest);
    
    return answer-1;
}

// 임의의 인접한 두 풍선을 고른다.
// 고른 풍선 중에서 번호가 더 작은 풍선을 터트리는 행위는 최대 1번만 할 수 있습니다. 
// 더 작은 풍선을 터트렸다면, 그 이후에는 인접한 두 풍선을 고른 뒤 번호가 더 큰 풍선만을 터트릴 수 있습니다.


//양 끝에 2개는 무조건 됨, 

// 특정 index 를 기준으로 양측에 나보다 더 작은 놈이 있으면 안됨. 

