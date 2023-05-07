import ColorManager from './ColorManager.js';
class Node {
    constructor(number, next, cell) {
        this.cell = cell;
        this.next = next;
        this.number = number;
    }
    mark(color) {
        if (this.cell)
            this.cell.mark(color);
        if (this.prev)
            this.prev.next = this.next;
        if (this.next)
            this.next.prev = this.prev;
    }
}
// Make abstract class Visualizer
export default class NodeSieveVisualizer {
    constructor() {
        this.colorManager = new ColorManager();
    }
    visualize(cells, end) {
        let nextNode = null;
        for (let i = end, j = cells.length - 1; i >= 2; i--, j--) {
            let currentCell = j >= 0 ? cells[j] : undefined;
            let node = new Node(i, nextNode, currentCell);
            if (nextNode)
                nextNode.prev = node;
            nextNode = node;
        }
        let lastNumber = Math.sqrt(end);
        let headNode = nextNode;
        while (headNode.number <= lastNumber) {
            const currentNumber = headNode.number;
            let currentNode = headNode.next;
            let color = null;
            while (currentNode) {
                if (currentNode.number % currentNumber == 0) {
                    if (!color)
                        color = this.colorManager.pop();
                    currentNode.mark(color);
                }
                currentNode = currentNode.next;
            }
            headNode = headNode.next;
            console.log(headNode.number);
        }
    }
}
