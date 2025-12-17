function solution(fees, records) {
    var answer = [];
    const defaultTime = fees[0];
    const defaultFee = fees[1];
    const time = fees[2];
    const timePerFee = fees[3];
    
    let cars = {};
    //-------------
    
    records.forEach((record,index,array)=> {
        const recordSplitted = record.split(" ");
        const [hour,minute] = recordSplitted[0].split(":");
        const carNumber = recordSplitted[1];
        const inOut = recordSplitted[2];
        let minutes = parseInt(hour) * 60 + parseInt(minute);
        if(inOut == "IN") {
           minutes = minutes  * (-1);
        }
        if(cars[carNumber]) {
            cars[carNumber][0] += minutes;
            cars[carNumber][1] = inOut;
        }else {
            cars[carNumber] = [minutes, inOut];
        }
    })
    
    for(const c in cars) {
       if(cars[c][1] == "IN") {
           cars[c][0] += 23 * 60 + 59;
       }
    }
    const carKeys = Object.keys(cars);
    carKeys.sort();
    
//     console.log(cars);
    
//     console.log(carKeys);
    
    carKeys.forEach((key,index,array)=> {
        const totalTime = cars[key][0];
        if(totalTime - defaultTime > 0) {
            answer.push(defaultFee + Math.ceil((totalTime - defaultTime)/time) * timePerFee);
        } else {
            answer.push(defaultFee);
        }
    })
    return answer;
}