function solution(nums) {
    var answer = 0;
    const N = nums.length /2;
    console.log(N);
    let object = {};
    nums.forEach((value) => {
        if(!object[value]) {
            object[value] =1;
        }else {
            object[value] +=1;
        }
    })
    const objLength = Object.keys(object).length;
    console.log(objLength);
    if(objLength > N) {
        answer = N;
    }else {
        answer = objLength;
    }
    return answer;
}