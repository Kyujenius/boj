/**
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
*/
function solution(n) {
    var answer = 0;
    let changeN = n;
    const nBinary = n.toString(2);
    while(true) {
        changeN++;
        const changeNBinary = changeN.toString(2);
        // console.log(`nBinary: ${nBinary}, changeNBinary: ${changeNBinary}`);
        if(nBinary.replace(/0/g, '') == changeNBinary.replace(/0/g, '')) {
            answer=changeN;
            break;
        }
    }
    return answer;
}