function solution(people, limit) {
    var answer = 0;
    let biggerPointer = 0;
    let smallerPointer = people.length-1;
    people.sort((a,b)=>b-a);
    while(biggerPointer <= smallerPointer) {
        //넘 뚱뚱해서 한 명밖에 못 탈 때,
        if(people[biggerPointer] + people[smallerPointer] > limit) {
            biggerPointer++;
        }else {
        //가벼워서 둘은 태울 수 있을 때,
            biggerPointer++;
            smallerPointer--;
        }
        answer++;

        //가벼워서 둘은 탈 수 있을 때,
        
    }
    return answer;
}