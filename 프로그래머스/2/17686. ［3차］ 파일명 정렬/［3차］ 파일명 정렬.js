function solution(files) {
    var answer = [];
    files.sort((a,b) => {
        
        const regex = /^(\D+)(\d+)/;
        const aMatch = a.match(regex);
        const bMatch = b.match(regex);
        // console.log(aMatch,bMatch);
        
        const aHead = aMatch[1].toLowerCase();
        const aNumber = parseInt(aMatch[2]);
        const aTail = aMatch[3];
        
        const bHead = bMatch[1].toLowerCase();
        const bNumber = parseInt(bMatch[2]);
        const bTail = bMatch[3];
        

        // 2. HEAD 비교 (오름차순)
        if (aHead < bHead) return -1;
        if (aHead > bHead) return 1;

        // 3. HEAD가 같다면 NUMBER 비교 (오름차순)
        if (aNumber < bNumber) return -1;
        if (aNumber > bNumber) return 1;
        
        
        return 0;
    })
    return files;
}