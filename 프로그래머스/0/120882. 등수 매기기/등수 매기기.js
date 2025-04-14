function solution(score) {
    var answer = [];
    let sumScore = score.map(([english,math])=> {return english + math});
    console.log(sumScore);
    
    sumScore.forEach((value) => {
        let count = 1 ;
        for(let i = 0 ; i< sumScore.length; i++) {
            if(value < sumScore[i]) {
                count++;
            }
        }
        answer.push(count);
        
    })
    return answer;
}