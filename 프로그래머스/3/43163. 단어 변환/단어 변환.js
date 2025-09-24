function solution(begin, target, words) {
    var answer = 0;
    const n = words.length;
    let queue = [];
    queue.push([begin, 0]);
    
    function compare(a,b) {
        let count = 0;
        const length = a.length;
        for(let i =0; i<length; i++) {
            if(a[i] == b[i]) {
                count++;
            }            
        }
        if(count == length-1) {
            console.log('a와 b는 변환가능.', a,b)
            return true;
        }else {
            return false;
        }
    }
    
    while(queue.length >0) {
        let [word, count] = queue.shift();
        // console.log(word,count);
        if(word == target) {
            // console.log('똑같다.', target, word)
            return count;
        }

        for(let i = 0 ; i<words.length; i++) {
            if(compare(word,words[i])) {
                queue.push([words[i], ++count]);
                words = words.filter((value)=> value !==words[i]);
                
            }
        }
    }
    return answer;
}