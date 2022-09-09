class TreeNode {
    data: any
    left: any
    right: any

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    root: any;

    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    add(data) {
        const newNode = new TreeNode(data);

        if(this.isEmpty()) {
            this.root = newNode;
        }else{
            this.insertNodeRec(this.root, newNode);
        }
    }

    insertNodeRec(root, newNode) {
        if(newNode.data < root.data) {
            if(root.left === null) {
                root.left = newNode;
            }else{
                this.insertNodeRec(root.left, newNode);
            }
        }else{
            if(root.right === null) {
                root.right = newNode;
            }else{
                this.insertNodeRec(root.right, newNode);
            }
        }
    }

    search(root, value){
        if(!root) {
            return false
        } else {}

        if(root.data === value) {
            return true
        }else{
            if(value < root.data) {
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root){ // depth-first search
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
        return null
    }

    inOrder(root){ // depth-first search
        if(root) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root){ // depth-first search
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    levelOrder() { // breadth-first search
        const queue = [];

        queue.push(this.root);
        while(queue.length){
            let currentVal = queue.shift();
            console.log(currentVal.data);

            if(currentVal.left) {
                queue.push(currentVal.left);
            }

            if(currentVal.right) {
                queue.push(currentVal.right);
            }
        }
    }


    min(root) {
        if(!root.left) {
            return root.data
        }else{
            return this.min(root.left)
        }
    }

    max(root) {
        if(!root.right) {
            return root.data
        }else{
            return this.max(root.right)
        }
    }
       
}
