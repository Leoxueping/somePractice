function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

let prevTraversal = (tree, arr) => {
    arr = [] || arr;
    if(!tree) 
        return arr;
    arr.push(tree.val);
    
    
    return [...arr, ...prevTraversal(tree.left, arr), ...prevTraversal(tree.right, arr)];
}
function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if(!pRoot2 || !pRoot1) 
        return false;
    
    let arr1 = prevTraversal(pRoot1);
    let arr2 = prevTraversal(pRoot2);
    for(let i = 0; i < arr1.length; i++) {
        if(arr1.length - i < arr2.length) 
            return false;
        if(arr1[i] === arr2[0]) {
            let flag = true;
            for(let j = 1; i < arr2.lenght; j ++) {
                if(arr2[j] !== arr1[i+j]) 
                    flag = false;
            }
            if(flag) return true;
        }
    }
    return false;
}

let a = new TreeNode(1),
    b = new TreeNode(2),
    c = new TreeNode(3),
    d = new TreeNode(4),
    e = new TreeNode(5);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
console.log(a);
console.log(prevTraversal(a))