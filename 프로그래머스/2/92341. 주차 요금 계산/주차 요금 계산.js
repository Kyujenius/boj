function solution(fees, records) {
    var answer = [];
    const [defaultTime, defaultFee, perTime, perFee] = fees;
    // console.log(defaultTime, defaultFee, perTime, perFee);
    
    const carObj = {};
    records.forEach((value)=> {
        const [time, carNumber, INOUT] = value.split(" ");
        const [hour, minute] = time.split(":").map(Number);
        const totalTime = hour*60 + minute;
        
        if(carObj[carNumber] === undefined) {
            if(INOUT === "IN") {
                carObj[carNumber] = {
                    totalTime: -totalTime,
                    inOut: INOUT
                };   
            };
            if(INOUT === "OUT") {
                carObj[carNumber] = {
                    totalTime: totalTime,
                    inOut: INOUT
                };
            }
        }else {
            if(INOUT === "IN") {
                carObj[carNumber].totalTime -= totalTime
                carObj[carNumber].inOut  = INOUT
            }
            if(INOUT === "OUT") {
                carObj[carNumber].totalTime += totalTime
                carObj[carNumber].inOut  = INOUT
            }
        }
    })
    
    for(const carKey in carObj) {
        if(carObj[carKey].inOut === "IN") {
            carObj[carKey].totalTime += (23*60 + 59);
            carObj[carKey].inOut = "OUT";
        }
    }
    
    const keys =  Object.keys(carObj);
    keys.sort();
    // console.log(keys);
    for(let i = 0 ; i<keys.length; i++){
        const key = keys[i];
        const finalTime = carObj[key].totalTime;
        if(finalTime<=defaultTime){
            answer.push(defaultFee);   
        }else{
            answer.push(defaultFee + (Math.ceil((finalTime-defaultTime) / perTime) * perFee))
        }
        
    }
    // console.log(carObj);
    return answer;
}