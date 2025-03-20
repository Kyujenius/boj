const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
const arr = [];

for (let i = 0; i < input; i++) {
  arr[i] = i + 1;
}
size = input;
const result_index = input;
front = 0;  // arr[front]가 '현재 맨 앞'이라고 가정

for (let i =0 ; i<input-1; i++) {

    //shift() 역할
    arr.push(arr[i+front+1]);
    front++;
    size--;
    //shift() 후 맨뒤에 넣는 역할
}
console.log(arr[input-1+front])


