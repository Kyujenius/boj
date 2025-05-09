function solution(answers) {
    var answer = [];
    let person1Score = 0;
    let person2Score = 0;
    let person3Score = 0;
    let scoreArray = [];
    const person1= [1,2,3,4,5];
    const person2= [2,1,2,3,2,4,2,5];
    const person3= [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((number,index,array) => {
        if(number == person1[index % 5]) {
            person1Score +=1;
        }
        if(number == person2[index % 8]) {
            person2Score +=1;
        }
        if(number == person3[index % 10]) {
            person3Score +=1;
        }
    })
    const maxScore = Math.max(person1Score,person2Score, person3Score);
    
    scoreArray.push(person1Score,person2Score, person3Score);
    
    console.log(scoreArray);
    scoreArray.forEach((number,index,array) => {
        if(number == maxScore) {
            answer.push(index+1);
        }
    })
    
    answer.sort((a,b) => a-b);
    
    return answer;
}