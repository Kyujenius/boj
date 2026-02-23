function solution(n, roads, sources, destination) {
    var answer = [];
    const map = {};

    roads.forEach(([from,to])=> {
        if(map[from] ===undefined) {
            map[from] = [to]
        }else {
            map[from].push(to)
        }
        
        if(map[to] ===undefined) {
            map[to] = [from]
        }else {
            map[to].push(from)
        }
    })
    
    // console.log(map);
    const visited = Array(n +1).fill(-1);
    const queue = [[destination,0]];
    visited[destination] = 0;
    
    while(queue.length >0) {
        const [from, count] = queue.shift();
        map[from].forEach((value)=> {
            if(visited[value] === -1) {
                visited[value] = count+1;
                queue.push([value,count+1]);
            }
        })
    }
    // console.log(visited);

    answer = sources.map((value)=> visited[value]);
    return answer;
}

// 각 destination에서 bfs를 진행하고, 각 sources 에 해당하는 위치들의 수가 얼마나 되는지 보면 될 듯

//지도에서 강철부대가 위치한 지역을 포함한 각 지역은 유일한 번호로 구분되며, 
//두 지역 간의 길을 통과하는 데 걸리는 시간은 모두 1로 동일합니다.
//임무의 시작 때와 다르게 되돌아오는 경로가 없어져 복귀가 불가능한 부대원도 있을 수 있습니다.

//총 지역의 수 n

//두 지역을 왕복할 수 있는 길 정보 roads

//각 부대원이 위치한 서로 다른 지역들을 나타내는 정수 배열 sources

//강철 부대의 지역 destination

