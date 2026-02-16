function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    var answer = 1;
    const firstTruck = truck_weights.shift();
    let capacity = weight - firstTruck;
    bridge[bridge.length-1] = firstTruck;
    
    //트럭 다 비워져있고, capacity 라는 녀석이 최초 주어진 녀석이 아닐 때는 계속 ㄱㄱ
    while(truck_weights.length > 0 || capacity !== weight) {
        let getInTruck= 0;
        const getOutTruck = bridge.shift();
        capacity += getOutTruck;
        if(capacity >= truck_weights[0]) {
            getInTruck = truck_weights.shift();
            capacity -= getInTruck;
        }else {
            getInTruck = 0;
        }
        bridge.push(getInTruck);
        answer++;
    }
    
    return answer;
}