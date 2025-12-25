function solution(genres, plays) {
    var answer = [];
    const genreObj = {};
    genres.forEach((genre,index,array)=> {
        if(genreObj[genre] == undefined) {
            genreObj[genre] = {array : [[plays[index],index]],
                              total: plays[index]};
        }else {
            genreObj[genre].array.push([plays[index],index]);
            genreObj[genre].total += plays[index];
        }
    });
    
    for(const key in genreObj) {
        genreObj[key].array.sort((a,b)=>{
            if(a[0] > b[0]) return -1;
            if(a[0] < b[0]) return 1;
            return a[1] - b[1];
        })
    }
    const genreEntries = Object.entries(genreObj);
    
    genreEntries.sort((a,b)=>b[1].total - a[1].total);
    console.log(genreEntries);
    genreEntries.forEach((genreEntry)=> {
        const genre = genreEntry[0];
        const genreObj = genreEntry[1];
        if(genreObj.array[0] !== undefined) answer.push(genreObj.array[0][1]);
       if(genreObj.array[1] !== undefined) answer.push(genreObj.array[1][1]);
        
    })
    
    
    return answer;
}