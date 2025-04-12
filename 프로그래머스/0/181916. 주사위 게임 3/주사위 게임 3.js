function solution(a, b, c, d) {
    let object = {};
    
    objectPush(object, a);
    objectPush(object, b);
    objectPush(object, c);
    objectPush(object, d);
    console.log(object)
    
    const values = Object.values(object);
    values.sort((a,b) => b-a);
    console.log(values);
    var answer = 0;
    
    if(values[0] == 4) {
        answer = a + 10 * a + 100 * a + 1000 * a;
    }else if(values[0] ==3 && values[1] == 1) {
        const p = parseInt(Object.keys(object).find(key => object[key] === values[0]));
        const q = parseInt(Object.keys(object).find(key => object[key] === values[1]));
        answer = (10 * p + q)**2;
        }
        else if(values[0] ==2 && values[1] == 2) {
            const [p,q] = Object.keys(object).map(Number);

            let absolute = 0;
            
            if(p>=q) {
                absolute = p-q;
            }else {
                absolute = q-p;
            }
            answer = (p+q) * absolute;
        }else if(values[0] ==2 && values[1] == 1) {
            const p = parseInt(Object.keys(object).find(key => object[key] === values[0]));
            delete object[p];
            const [q,r] = Object.keys(object).map(Number);
            console.log(p,q,r)
            answer= q*r
        }else if(values[0] ==1 && values[1] == 1) {
            const [p,q,r,s] = Object.keys(object).map(Number);
        
            answer= Math.min(p,q,r,s)
        }
        return answer;

    }

function objectPush(obj, number) {
    if(!obj[number]) {
        obj[number] = 1;
    }else {
        obj[number] += 1;
    }
}