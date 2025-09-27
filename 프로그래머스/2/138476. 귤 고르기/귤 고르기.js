// 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.
// tangerine으로 만든 객체들 중 그 length 가 약수랑 같은 것을 찾자?
function solution(k, tangerine) {
    var answer = 0;
    let object = {};
    tangerine.forEach((value,index)=> {
        if(object[value]) {
            object[value]++;
        }else {
            object[value] = 1;
        }
    })
    
    // console.log(object);
    const objEntry= Object.entries(object);
    objEntry.sort((a,b)=>b[1]-a[1]);
    // console.log(`after Sort : ${objEntry}`);
    let counter = 0;
    for(let i = 0 ; i< objEntry.length; i++) {
        counter += objEntry[i][1];
        answer++;   
        if(counter >= k) {
            break;
        }
    }
    return answer;
}