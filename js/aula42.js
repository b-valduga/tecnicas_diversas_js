let valores = [1, 2, 3, 4, 5];
let op = [
    (val) =>{
        let res = 0;
        for(i of val){
            res += i;
        }
        return res;
    },
    (val) =>{
        let res = 1;
        for(i of val){
            res *= i;
        }
        return res;
    },
    (val) =>{
        for(i of val){
            console.log(i);
        }
    }
]

//console.log(op[0](valores))
op[2](valores);