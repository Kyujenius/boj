function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = Array(bridge_length).fill(0);
    while(true) {
        const shiftedBridge = bridge.shift();
        weight += shiftedBridge;
        answer++;       
        
        //트럭을 넣을 수 있으면 넣기
        if(weight - truck_weights[0] >= 0) {
            const shiftedTruck = truck_weights.shift();    
            bridge.push(shiftedTruck); 
            weight -=shiftedTruck;
        }else {
            bridge.push(0);
        }
        

        if(truck_weights.length === 0 && bridge.every((value) =>value === 0)) break;
    }

    return answer;
}

// 시간초를 어떻게 구현하지?

// 언제 끝내지?