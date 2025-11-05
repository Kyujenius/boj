function solution(str1, str2) {
    const regex = /^[A-Z]{2}$/;
    
    function makeStrSet(str) {
        const strLength = str.length;
        const multiSet = [];
        for(let i = 0; i<strLength-1; i++) {
            const word = str[i] + str[i+1];
            const upperWord = word.toUpperCase();
            if(regex.test(upperWord)) {
                multiSet.push(upperWord);
            }
        }
        return multiSet;
    }
    
    const str1Set = makeStrSet(str1);
    const str2Set = makeStrSet(str2);
    
    if(str1Set.length == 0 && str2Set.length == 0) {
        return 65536;
    }
    
    const copyStr2Set = [...str2Set];
    let multiSectionNumber = 0;
    str1Set.forEach((value,index)=> {
        const idx = copyStr2Set.indexOf(value);
        if(idx !== -1) {
            multiSectionNumber++;
            copyStr2Set.splice(idx,1);
        }
    })
    const union = (str1Set.length + str2Set.length - multiSectionNumber);
    const jacad = Math.floor((multiSectionNumber / union) * 65536);
    return jacad
}