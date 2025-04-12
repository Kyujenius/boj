function solution(rank, attendance) {
    let object= {};
    for(let i = 0 ; i<rank.length; i++) {
        object[i] = {rank: rank[i] , attendance: attendance[i]};
    }
    const entries = Object.entries(object).filter(([key,entry]) => entry.attendance == true);
    const newEntries = entries.sort(([key,entry], [key2,entry2])=> entry.rank-entry2.rank);
    console.log(newEntries);
    const a = parseInt(newEntries[0]);
    const b = parseInt(newEntries[1]);
    const c = parseInt(newEntries[2]);
    var answer = a*10000 + b*100 + c;
    return answer;
}