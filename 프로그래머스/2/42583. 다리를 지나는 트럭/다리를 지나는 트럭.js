function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = Array(bridge_length).fill(0);
    // console.log(bridge);
    const firstTruck = truck_weights.shift();
    let currentWeight = 0;
    bridge[bridge_length-1] = firstTruck;
    currentWeight = firstTruck;
    answer ++;
    // 첫 트럭 올리고 시작
    while(currentWeight>0) {
        answer ++;
        const shifted = bridge.shift();
        currentWeight -= shifted;
        //트럭이 남아있으면 넣어야지,
        if(truck_weights.length > 0) {
            //더 크면 못 올리고
            if(weight - currentWeight < truck_weights[0]) {
                bridge.push(0);
            }else {
            //작으면 올리고 하나씩 옮기고,
                const newTruck = truck_weights.shift();
                currentWeight += newTruck;
                bridge.push(newTruck);
            }
        }
    }
    return answer;
}