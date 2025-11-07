function solution(begin, target, words) {
    var answer = 0;
    const queue= [];
    const visited = Array(words.length).fill(false);
    function isWordDifferentByOne(wordA,wordB) {
        let count = 0;
        for(let i = 0 ; i<wordA.length; i++) {
            if(wordA[i] !== wordB[i]){
                count++;
            }
        }
        if(count > 1) {
            return false;
        }else if(count ==1) {
            return true;
        }
    }
    queue.push([begin,0]);
    while(queue.length>0) {
        const [word, count] = queue.shift()
        if(count == words.length) {
            return 0;
        }
        if(word == target){
            return count;
        }else {
            for (let i = 0; i < words.length; i++) {
                // 아직 방문하지 않았고, 한 글자 차이인지 확인
                if (!visited[i] && isWordDifferentByOne(word, words[i])) {
                    visited[i] = true; // 방문 처리
                    queue.push([words[i], count + 1]); // 큐에 다음 단어와 1 증가한 단계를 넣음
                }
            }        
        }

    }
    
    return answer;
}