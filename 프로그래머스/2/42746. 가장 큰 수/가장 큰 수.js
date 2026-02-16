function solution(numbers) {
    numbers.sort((a,b)=> {
        const aString = a.toString();
        const bString = b.toString();
        
        const aFirst = aString + bString;
        const bFirst = bString + aString;
        
        return parseInt(bFirst) - parseInt(aFirst);
    })
    
    let final = numbers.join("");
    final = final[0] === "0" ? "0" : final;

    return final ;
}