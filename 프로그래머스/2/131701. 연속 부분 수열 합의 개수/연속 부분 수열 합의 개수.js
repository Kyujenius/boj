function solution(elements) {
    const addSet = new Set();
    for(let i = 0; i<elements.length; i++) {
        let addAll = 0;
        for(let j=0; j<elements.length; j++) {
            addAll += elements[(i+j)%elements.length];
            addSet.add(addAll)
        }
    }
    return addSet.size;
}