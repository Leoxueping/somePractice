let pre = [1,2,4,7,3,5,6,8],
    vin = [4,7,2,1,5,3,8,6];
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    // write code here
    if(!pre.length || !vin.length) return null;
    let root = new TreeNode(pre[0]);
    let indexOfRoot = vin.indexOf(pre[0]);
    let vinLeft = vin.slice(0, indexOfRoot),
        vinRight = vin.slice(indexOfRoot + 1),
        preLeft = pre.slice(1, vinLeft.length + 1),
        preRight = pre.slice(vinLeft.length + 1);
    root.left = reConstructBinaryTree(preLeft, vinLeft);
    root.right = reConstructBinaryTree(preRight, vinRight);
    return root;
}

tree = reConstructBinaryTree(pre, vin);
console.log(tree)
