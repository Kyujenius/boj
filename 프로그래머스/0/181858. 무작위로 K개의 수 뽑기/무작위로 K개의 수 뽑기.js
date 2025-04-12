function solution(arr, k) {
    var answer = Array(k).fill(-1);
    let unDuplicatedArray = [];
    for(let i = 0 ; i< arr.length; i++) {
        // 보유하고 있으면 안 넣고, 안 보유하면 넣어야지
        if(!unDuplicatedArray.includes(arr[i])){
            unDuplicatedArray.push(arr[i]);  
        }
    }
    console.log(unDuplicatedArray)

    for(let i = 0 ; i< Math.min(k,unDuplicatedArray.length); i++) {
            answer[i] = unDuplicatedArray[i];
    }    
    
    console.log(answer);
    return answer;
}