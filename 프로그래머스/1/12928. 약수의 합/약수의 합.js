function solution(n) {
    var answer = 0;
    const array = [];

    for(let i = 1; i<=n; i++) {
        const integerNum = parseInt(n/i);
        const dividedNumber = (n/i);
        if(integerNum === dividedNumber) {
            array.push(integerNum);
        }
    }
    for(let i = 0; i<array.length; i++) {
        answer += parseInt(array[i]);
    }
    return answer;
}