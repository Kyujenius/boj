function solution(clothes) {
    var answer = 0;
    const closet = {};
    clothes.forEach((value)=> {
        const [wear, theme] = value;
        if(closet[theme]) {
            closet[theme].push(wear)
        }else {
            closet[theme] = [wear];
        }
    })
    const closetValue = Object.values(closet);
    answer = closetValue.reduce((acc,cur)=> {
        return acc *= (cur.length + 1)
    },1);
    return answer-1;
}