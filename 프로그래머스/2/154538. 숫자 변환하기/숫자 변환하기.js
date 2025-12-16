function solution(x, y, n) {
    var answer = -1;
    if(x== y) return 0;
    const queue = [];
    let index = 0;
    queue.push([x,0]);
    const set = new Set();
    set.add(x);
    while(index < queue.length) {
        const [value,count] = queue[index];
        index++;
        const newValueArray = [value + n, value *2 , value *3];
        for(let i = 0 ; i<3; i++) {
            const newValue = newValueArray[i];
            if(newValue == y) {
                return count +1
            }else if(newValue < y && !set.has(newValue)){
                set.add(newValue);
                queue.push([newValue, count+1])
            }
        }
    }
    
    return answer;
}