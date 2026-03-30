function solution(enroll, referral, seller, amount) {
    var answer = [];
    const obj = {};
    const money = {};
    money["-"] = 0;
    enroll.forEach((from)=> {
        money[from] = 0;
    })
    //enroll 과 referral 로 일단 부모단의 그래프 형성
    referral.forEach((parent,index)=> {
        const child = enroll[index];
        if(obj[child] === undefined) {
            obj[child] = parent
        }
    })
    // console.log(obj);
    amount.forEach((value,index)=> {
        ref(value*100,seller[index]);
    })
    

    //seller 와 amount 로 이제 수익 구조 생성
    function ref(won, from) {
        if(from === "-") {
            money[from] += won;
            return;
        }else {
            const parentMoney = Math.floor(won * 0.1);
            if(parentMoney >= 1) {
                money[from] += won - parentMoney;
                ref(parentMoney, obj[from]);    
            }else {
                money[from] += won;
                return;
            }
        }
        // console.log(money);
    }
    const moneys = Object.values(money);
    moneys.shift();
    return moneys;
}



// ----
//칫솔의 판매에 의하여 발생하는 이익에서 10% 를 계산하여 자신을 조직에 참여시킨 추천인에게 배분하고 나머지는 자신이 가집니다.
//자신이 조직에 추천하여 가입시킨 판매원에게서 발생하는 이익의 10% 까지 자신에 이익이 됩니다.
//자신에게 발생하는 이익 또한 마찬가지의 규칙으로 자신의 추천인에게 분배됩니다.
//단, 10% 를 계산할 때에는 원 단위에서 절사하며, 10%를 계산한 금액이 1 원 미만인 경우에는 이득을 분배하지 않고 자신이 모두 가집니다.

// ----

//enroll에 민호의 이름은 없습니다. 따라서 enroll의 길이는 민호를 제외한 조직 구성원의 총 수입니다.

//referral = enroll의 길이


//seller 내의 i 번째에 있는 이름은 i 번째 판매 집계 데이터가 어느 판매원에 의한 것인지를 나타냅니다.

//amount의 길이는 seller의 길이와 같습니다.
// amount 내의 i 번째에 있는 수는 i 번째 판매 집계 데이터의 판매량을 나타냅니다. 판매량의 범위, 즉 amount 의 원소들의 범위는 1 이상 100 이하인 자연수입니다.

// 칫솔 한 개를 판매하여 얻어지는 이익은 100 원으로 정해져 있습니다.

