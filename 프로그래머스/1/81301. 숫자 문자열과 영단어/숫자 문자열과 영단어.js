function solution(s) {
    const words = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    let result = s;
    
    words.forEach((word, index) => {
        result = result.split(word).join(index);
    });
    
    return parseInt(result);
}
