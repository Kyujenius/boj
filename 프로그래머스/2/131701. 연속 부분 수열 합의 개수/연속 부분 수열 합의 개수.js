function solution(elements) {
    const numberSet = new Set();
    for(let i = 0 ; i<elements.length; i++) {
        let startNumber = 0;
        for(let j=0;j<elements.length; j++) {
            startNumber += elements[(i+j) % elements.length];
            numberSet.add(startNumber);
        }
    }
    return numberSet.size;
}