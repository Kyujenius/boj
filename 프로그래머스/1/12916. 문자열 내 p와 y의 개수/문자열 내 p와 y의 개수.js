function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    

    const sArray = s.split("");
    for(str of sArray) {
        if(str == "p" || str == "P") {
            pCount++;
        }if(str == "y" || str == "Y") {
            yCount++;
        }
    }
    return pCount == yCount;
}