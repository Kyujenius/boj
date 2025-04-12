function solution(common) {
    let isPlus = true;
    var answer = 0;


     if(common[2] - common[1] ==common[1] - common[0]  ) {
         isPlus = true;
     }else {
         isPlus = false;
     }

    if(isPlus) {
        const plusNumber = common[1] - common[0];
        answer = common[common.length-1] + plusNumber;
    }else {
        const number = common[1]/common[0];
        answer = common[common.length-1]  * number;
    }
    return answer;
}