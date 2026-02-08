function solution(picks, minerals) {
    var answer = 0;
    
    const totalPicks = picks.reduce((acc,cur)=>acc+=cur);
    const candidate = [];
    const candidateMinerals = minerals.slice(0, totalPicks*5);
// a. minerals 5개씩 나눈다. -> 나눈 5개 광물들을 돌 곡괭이로 캔다고 가정하고 25,5,1 치환한다.
// b. 이젠 해당 5개를 하나의 세트로 보고, 그걸 기준으로 정렬을 한다.
// c. 정렬된 minerals를 보며, 각 picks 로 처리한다.(얘도 가장 좋은 것들로 처리)
    while(candidateMinerals.length > 0) {
        const mineralSet = candidateMinerals.splice(0,5);
        let mineralAmount = 0;
        mineralSet.forEach((cur)=> {
            switch(cur) {
                case "diamond" :
                    mineralAmount+=25;
                    break;
                case "iron" :
                    mineralAmount +=5;
                    break;
                case "stone" :
                    mineralAmount +=1;
                    break;
            }
        })
        
        const mineralObj = {minerals: mineralSet, mineralAmount: mineralAmount}; 
        candidate.push(mineralObj);
    }
    candidate.sort((a,b)=>b.mineralAmount-a.mineralAmount);
    // console.log(candidate);
    
    for(let k = 0; k<3; k++) {
        const pickCount = picks[k];
        const picker = k === 0 ? 'diamondPick' : k === 1 ? 'ironPick' : 'stonePick';
        // console.log(picker,pickCount);
        for(let i = 0 ; i <pickCount; i++) {
            if(candidate.length === 0) return answer;
            const picking = candidate.shift();
            
            picking.minerals.forEach((mineral)=> {
                    if(picker === 'diamondPick') {
                        answer += 1;
                    }
                    if(picker === 'ironPick' && mineral === 'diamond') {
                        answer += 5;
                    }
                    if(picker === 'ironPick' && mineral === 'iron') {
                        answer += 1;
                    }
                    if(picker === 'ironPick' && mineral === 'stone') {
                        answer += 1;
                    }
                    if(picker === 'stonePick' && mineral === 'diamond') {
                        answer += 25;
                    }
                    if(picker === 'stonePick' && mineral === 'iron') {
                        answer += 5;
                    }
                    if(picker === 'stonePick' && mineral === 'stone') {
                        answer += 1;
                    }
            })
        }
    }
        

    return answer;  
}
    //가장 큰 세트들 


    /**
    *사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
    한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.
    광물은 주어진 순서대로만 캘 수 있습니다.
    광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
    */