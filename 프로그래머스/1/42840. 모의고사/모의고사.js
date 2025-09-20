function solution(answers) {
    const firstPerson = [1, 2, 3, 4, 5];
    const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;
    answers.forEach((value,index)=> {
        if(value == firstPerson[index % firstPerson.length]) {
            firstCount++;
        }
        if(value == secondPerson[index % secondPerson.length]){
            secondCount++;
        }
        if(value == thirdPerson[index % thirdPerson.length]) {
            thirdCount++;
        }
    })
    
    const maxCount = Math.max(firstCount,secondCount,thirdCount);
    const countArray = [firstCount,secondCount,thirdCount];
    let answer = [];
    
    // 가장 높은 점수를 가진 사람을 찾습니다.
    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] === maxCount) {
            answer.push(i + 1); // 인덱스(0, 1, 2)에 1을 더해 사람 번호(1, 2, 3)로 변환
        }
    }

    return answer;
}