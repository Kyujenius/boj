function solution(msg) {
    let answer = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split("");
    const dictionary = new Map();
    alphabetArray.forEach((value, index) => {
        dictionary.set(value.toUpperCase(), index+1);
    })
    // console.log(dictionary);
    let startIdx = 0;
    const length = msg.length;
    while(startIdx < length) {
        let indexingMsg = "";
        let count = 0;
        for(let i = 1; i<=length; i++) {
            const foundMsg = msg.slice(startIdx,startIdx+i);
            // 1. 사전에서 찾았을 때,
            if(dictionary.has(foundMsg)) {
                indexingMsg = foundMsg;
                count = i;
            }else {
            // 2. 사전에서 못찾았을 때, 
                console.log(foundMsg ,"추가");
                dictionary.set(foundMsg, dictionary.size + 1)
                break;
            }    
        }
        startIdx += count;
        answer.push(dictionary.get(indexingMsg));
    }
    // console.log(dictionary);

    return answer;
}