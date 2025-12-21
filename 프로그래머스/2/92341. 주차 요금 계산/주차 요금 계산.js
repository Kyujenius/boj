function solution(fees, records) {
    var result = [];
    const defaultTime = fees[0];
    const defaultFee = fees[1];
    const time = fees[2];
    const timePerFee = fees[3];
    const carObj = {};
    records.forEach((record,index,array)=> {
        const [time, carNumber,inOut]= record.split(" ");
        const [hour,minute] = time.split(":");
        let totalMinute = parseInt(hour) * 60 + parseInt(minute);
        if(inOut === "IN") totalMinute = totalMinute * (-1);
        if(!carObj[carNumber]) {
            carObj[carNumber] = [totalMinute,inOut];
        }else {
            carObj[carNumber][0] += totalMinute;
            carObj[carNumber][1] = inOut;
        }
    })
    
    //다 끝났는데 IN인 놈들 
    for(const carKey in carObj) {
        if(carObj[carKey][1] == "IN") {
            carObj[carKey][0] += 23*60 + 59;
            carObj[carKey][1] = "OUT";
        }
    }
    
    console.log(carObj);
    
    const keys = Object.keys(carObj);
    keys.sort();
    
    keys.forEach((key)=> {
        let answer = Infinity;
        if(carObj[key][0] - defaultTime < 0) {
            answer = defaultFee;
        }else {
            answer = defaultFee + Math.ceil((carObj[key][0] - defaultTime)/time) * timePerFee
        }
        result.push(answer);
    })
    
        
    
    return result;
}