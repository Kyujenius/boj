class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


function solution(n, k, cmd) {
    const nodeArr = [];
    var answer = Array(n).fill("O");
    for(let i= 0; i<n; i++) {
        nodeArr.push(new Node(i));
    }
    for(let i= 0; i<n; i++) {
        if(i>0) nodeArr[i].prev = nodeArr[i-1];
        if(i<n-1) nodeArr[i].next = nodeArr[i+1];
    }
    // console.log(nodeArr);
    let curr = nodeArr[k];
    const stack = [];
    
    function command(cmd,X) {
        switch(cmd) {
            case "D":
                for(let i = 0; i<X; i++) {
                    curr = curr.next;    
                }
                break;
            case "U":
                for(let i = 0; i<X; i++) {
                    curr = curr.prev;
                }
                break;
            case "C":
                stack.push(curr);
                let prevNode = curr.prev;
                let nextNode = curr.next;

                // 연결 끊기 (null 체크 필수)
                if (prevNode) prevNode.next = nextNode;
                if (nextNode) nextNode.prev = prevNode;

                // 커서 이동: 다음이 있으면 다음으로, 없으면 이전으로
                curr = nextNode ? nextNode : prevNode;
                break;
            case "Z":
                const popped = stack.pop();
                // console.log(popped);
                const prev = popped.prev;
                const poppednext = popped.next;
                if(prev) prev.next = popped;
                if(poppednext) poppednext.prev = popped;
                break;
        }
    }
    
    cmd.forEach((value)=> {
        const [CMD,X]= value.split(" ");
        command(CMD,X);
        // console.log(`----------CMD:${CMD}, X:${X}-------`);
        // console.log(curr);
    })
    
    stack.forEach((value) => {
        answer[value.value] = "X";
    })
    answer = answer.join("");
    
    return answer;
}

