function solution(msg) {
   var answer = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const dictionary = new Map();
    alphabetArray.forEach((value,index) => {
        dictionary.set(value.toUpperCase(),index+1);
    })
    const length = msg.length;
    let startIdx = 0;
    
    while(startIdx < length) {
        let idxWord = "";
        let count = 0 ;
        for(let i = 1 ; i<=length; i++) {
            const foundWord = msg.slice(startIdx, startIdx + i);
            //갖고 있으면 count 하나 더 올리기
            // console.log("찾는 단어", foundWord)

            if(dictionary.has(foundWord)) {
                idxWord = foundWord;
                count = i;
            }else {
                // console.log("사전 추가", foundWord);
                dictionary.set(foundWord,dictionary.size +1);
                break;
            }
         }
        startIdx += count;
        answer.push(dictionary.get(idxWord));
    }
    // console.log(dictionary);

 
    return answer;
}