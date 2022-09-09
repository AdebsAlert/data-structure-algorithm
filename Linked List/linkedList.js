
class ListNode {
    data: any;
    next: any;

    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkList {
    head: any;
    length: number;

    constructor(head: any = null) {
        this.head = head;
        this.length = 0;
    }

    unshift(data: any) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode
        this.length++
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;

        while (currentNode && currentNode.next != null) {
            currentNode = currentNode.next

        }

        return currentNode;
    }

    clear() {
        this.head = null
        this.length = 0
    }

    shift() {
        if(this.head){
            let currentNode = this.head

            this.head = currentNode.next
            this.length--
        }
    }

    pop(){
        if(this.length <= 1){
            this.clear()
            return
        }
        const lastNode = this.getLast();

        let currentNode = this.getFirst();

        while(currentNode.next !== lastNode) {
            currentNode = currentNode.next
        }

        currentNode.next = null
        this.length--
    }

    push(data) {
        const newNode = new ListNode(data);
        newNode.next = null;

        if(this.length < 1){
            this.unshift(data)
            return
        }

        let last = this.getLast();
        last.next = newNode;
        this.length++;
    }

    get(index){
        if(index < 0 || (index + 1) > this.length) return null;
        let counter = 0;
        let currentNode = this.head;

        while(counter < index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    set(index, data){
        const node = this.get(index);

        if(node){
            node.data = data;
            return node
        }

       return null;
    }

    remove(index) {
        if(index < 0 || (index + 1) > this.length) return null;

        if(index < 1){
            return this.shift()
        }

        if(index === this.length) {
            return this.pop()
        }

        let previousNode = this.get(index - 1)

        previousNode.next = previousNode.next.next
        this.length--
    }

    insert(index, data) {
        if(index < 0 || index > this.length) return null;

        const newNode = new ListNode(data)

        if(index < 1){
            return this.unshift(data)
        }

        if(index === this.length) {
            return this.push(data)
        }
        
        const currentIndexNode = this.get(index)
        const previousNode = this.get(index - 1)

        previousNode.next = newNode
        newNode.next = currentIndexNode
        this.length++

        return

    }
}