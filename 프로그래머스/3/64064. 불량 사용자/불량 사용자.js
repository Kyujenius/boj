function solution(user_id, banned_id) {
    var answer = 0;
    //banned_id 에 맞는 user_id 들을 
    const visited = Array(user_id.length).fill(false);
    const set = new Set();
    
    //visited 가 아니고, isMatched 도 true 면 dfs 한 번 더
    function dfs(index){
        if(index == banned_id.length) {
            const filteredUser = user_id.filter((value,idx)=> visited[idx]);
            const newUser = filteredUser.sort().join(',');
            set.add(newUser);
            return;
        };
        
        user_id.forEach((value,idx)=> {
            if(!visited[idx] && isMatched(value,banned_id[index])) {
                visited[idx] = true;
                dfs(index+1);
                visited[idx] = false;
            }     
        })
    }
    dfs(0);
    
    return set.size;
}

function isMatched(a,b) {
    if(a.length !== b.length) return false;

    for(let i =0; i<a.length; i++) {
        if(a[i] !== b[i] && b[i] !== '*') {
            return false;
        }            
    }

    return true;
}