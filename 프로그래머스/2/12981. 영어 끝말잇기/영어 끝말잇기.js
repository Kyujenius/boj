function solution(n, words) {
    const wordSet = new Set();
    let beforeWord = words[0];
    wordSet.add(beforeWord);
    for(let i = 1; i<words.length; i++) {
        let currentWord = words[i];
        const personNumber = (i % n) +1;
        const countNumber = Math.floor(i / n)+1;
        //같은 첫 글자와 마지막 글자가 다른 경우
        if(beforeWord[beforeWord.length-1] !== currentWord[0]) {
            return [personNumber, countNumber];
        }else if(wordSet.has(currentWord)) {
            return [personNumber, countNumber];
        } else {
            beforeWord = currentWord;
            wordSet.add(currentWord);
        }
    }
    
    return [0,0];
}