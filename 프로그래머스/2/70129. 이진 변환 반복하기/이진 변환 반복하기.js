function solution(s) {

    let zeroCount = 0; 
    let count =0;
    let newS = s;
    while(newS !== "1") {
    //1. 0제거 (제거한 수 카운트)
        const originalNewS = newS.length;
        newS = newS.replace(/0/g,'');
        zeroCount += originalNewS - newS.length;
        console.log("0제거",newS, count);
        //2. 이진 변환된 2진수 -> 10진수
        const new10S = parseInt(newS,2);
        // console.log("10진수",new10S)
        //3. 10진수 -> 2진수
        const new10SLength = newS.length;
        console.log("10진수 길이",new10SLength);
        newS = new10SLength.toString(2);
        console.log(newS);
        count++;
    }
    return [count,zeroCount];
}