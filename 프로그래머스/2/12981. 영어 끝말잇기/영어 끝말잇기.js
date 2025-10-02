function solution(n, words) {
    const doneWord = new Set();
    
    doneWord.add(words[0]);
    for(let i = 1; i<words.length; i++) {
        const afterWord = words[i];
        const beforeWord = words[i-1];

        const personNum = (i % n) +1;
        const wordNum = Math.floor(i / n)+1;
        // 글자가 다를 때, 
        if(beforeWord[beforeWord.length-1] !== afterWord[0]) {
            console.log("달라요");
            return [personNum, wordNum]
        }
        // 글자를 이미 갖고 있을 때,
        if(doneWord.has(afterWord)) {
            console.log("있어요");
            return [personNum, wordNum]
        }
        doneWord.add(afterWord);
        
    }
    return [0,0]
    
}