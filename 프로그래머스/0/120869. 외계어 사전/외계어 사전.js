function solution(spell, dic) {
    const booleanArray = dic.map(dictation => {
        const array = dictation.split("");
        const map = spell.map(value => array.includes(value));
        console.log(array,map);
        if(map.includes(false)) {
            return false
        }else {
            return true;
        };
    })
    console.log(booleanArray);
    if(booleanArray.includes(true)) {
        return 1;
    }else{
        return 2;
    }
}