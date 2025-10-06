function solution(citations) {
    var answer = [];
    const maxNum = Math.max(...citations);
    for(let i = 0 ; i<=maxNum; i++) {
        const h = i;
        const filteredCitation = citations.filter((value) => value>= h);
        if(filteredCitation.length >= h) {
            answer.push(h);
        }
    }
    return Math.max(...answer);
}