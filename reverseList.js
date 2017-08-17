function ListNode(x) {
    this.val = x;
    this.next = null;
}
function ReverseList(pHead) {
    // write code here
    let newList;
    while(pHead) {
        let prev = pHead;
        newList = pHead.next;
        newList.next = prev;
        pHead = pHead.next.next;
        prev.next = pHead;
        console.log(9)
    }
    return newList;
}

a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
console.log(a)
console.log(ReverseList(a))