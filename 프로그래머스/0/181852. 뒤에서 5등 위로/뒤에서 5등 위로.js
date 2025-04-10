function solution(num_list) {
    var answer = [];
    const new_num_list = num_list.map(Number).sort((a,b) => a-b);

    answer = new_num_list.slice(5,new_num_list.length);

    return answer;
}