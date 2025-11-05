function solution(word) {
    var answer = 0;
    const vowel = {'A':0, 'E':1, 'I':2, 'O':3, 'U':4};
    const weights = [781,156,31,6,1];
    
    const wordLength = word.length;
    answer += wordLength;
    for(let i = 0 ; i<wordLength; i++) {
        const letter = word[i];
        answer += weights[i] * vowel[letter];
    }
    return answer;
}