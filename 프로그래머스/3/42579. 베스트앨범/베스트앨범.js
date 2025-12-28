function solution(genres, plays) {
    var answer = [];
    const genreObj = {};
    genres.forEach((genre,index,array)=> {
        if(genreObj[genre] == undefined) {
            genreObj[genre] = {play: [[plays[index], index]], total: plays[index]};
        }else {
            genreObj[genre].play.push([plays[index], index]);
            genreObj[genre].total += plays[index];
        }
    })
    // console.log(genreObj);
    const genreEntries = Object.entries(genreObj)
    genreEntries.sort((a,b)=>b[1].total - a[1].total);
    // console.log(genreEntries);
    genreEntries.forEach((genreEntry)=> {
        genreEntry[1].play.sort((a,b)=>b[0]-a[0]);
        // console.log(genreEntry[1].play);
        if(genreEntry[1].play[0] !== undefined) {
            answer.push(genreEntry[1].play[0][1]);
        }
        if(genreEntry[1].play[1] !== undefined) {
            answer.push(genreEntry[1].play[1][1]);
        }

    })
    return answer;
}