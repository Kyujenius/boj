function solution(fees, records) {
    var answer = [];
    const defaultTime = fees[0];
    const defaultFee = fees[1];
    const time = fees[2];
    const timePerFee = fees[3];
    let car = {}
    records.sort((a,b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1]));
    console.log(records);
    records.forEach((value,index,array)=> {
        const [timeChar, carNumber, inOut] = value.split(" ");
        const [hour, minute] = timeChar.split(":");
        let timeNumber = parseInt(hour) * 60 + parseInt(minute);
        // console.log(timeNumber, timeChar, carNumber, inOut);
        
        //입차 출차에 대해서 이제 Map 이나 obj 로 관리
        if(car[carNumber] == undefined) {
            car[carNumber] = [-timeNumber,true]
        }else if(car[carNumber] !== undefined && inOut == "IN") {
            car[carNumber][0] -= timeNumber;
            car[carNumber][1] = true;
        }   //입차 출차중 OUT 이면 0번째 배열 빼주기
        else if(car[carNumber] !== undefined && inOut == "OUT") {
            car[carNumber][0] += timeNumber
            car[carNumber][1] = false;
        }
        // console.log(car);
    })
    // console.log(Object.entries(car));
    // car = Object.fromEntries(Object.entries(car).sort((a,b) => parseInt(a[0]) - parseInt(b[0])));
    // console.log(car);
    const carKeys = Object.keys(car).sort();
    
    for(let i = 0 ; i<carKeys.length; i++) {
        if(car[carKeys[i]][1] == true) {
            car[carKeys[i]][0] += 23 * 60 + 59;
        }
        
    }
    for(let i = 0 ; i<carKeys.length; i++) {
        if(car[carKeys[i]][0] - defaultTime > 0) {
            const finalFee = defaultFee + Math.ceil((car[carKeys[i]][0] - defaultTime) / time) * timePerFee;
            answer.push(finalFee);
        }else {
            answer.push(defaultFee);
        }
    }
    
    
    return answer;
}