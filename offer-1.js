function twoFind(arr, len, target) {
    let head = 0,
        tail = len -1;
    if(target === arr[head] || target === arr[tail]) return true;
    while(head < tail && head !== tail - 1) {
       
        let middle = parseInt((head + tail) / 2);
        
        if(target === arr[middle]) {
            return true;
        }
        if(target > arr[middle]) {
            head = middle;
        }
        if(target < arr[middle]) {
            tail = middle;
        }
    }
    return false;
}
function Find(target, array) {
    let arrayLen = array.length;
    // let result = false;
    return array.some((item, index) => {
        let itemLen = item.length;
        if(item[0] <= target && item[itemLen - 1] >= target) {
           return twoFind(item, arrayLen, target)
        }
        return false;
    })
    // return result;
}

var arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

console.log(Find(7, arr));

console.log('dsd df'.replace(/\s{1}/g, '%20'));

function printListFromTailToHead(head){
    let vals = [];
    while(head) {
        vals.unshift(head.val);
        head = head.next;
    }
    return vals;
}

var b= {
    val: 2,
    next: null
}
var head = {
    val: 1,
    next: b
}


console.log(printListFromTailToHead(head))