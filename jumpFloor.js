/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。*/
function jumpFloor(number) {
    if(number < 1) return 0;
    if(number < 3) return number;
    let f1 = 1,
        f2 = 2,
        fn;
    for(let i = 2; i < number; i ++) {
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }
    return fn;
}

let a = jumpFloor(3)
console.log(a)