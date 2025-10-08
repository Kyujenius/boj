function solution(clothes) {
    var answer = 0;
    const closet = {};
    clothes.forEach((value)=> {
        const [cloth, theme] = value;
        if(!closet[theme]) {
            closet[theme] = [cloth]
        }else {
            closet[theme].push(cloth)
        }
    })
    console.log(closet);
    const closetValues = Object.values(closet)
    let counter = 1;
    closetValues.forEach((value)=> counter = counter * (value.length+1));

    return counter-1 ;
}