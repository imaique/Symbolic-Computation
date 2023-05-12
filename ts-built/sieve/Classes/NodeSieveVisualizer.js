var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    markPrime(color) {
        if (this.cell)
            this.cell.markPrime(color);
    }
}
// Make abstract class Visualizer
export default class NodeSieveVisualizer {
    constructor() {
        this.colorManager = new ColorManager();
    }
    visualize(cells, end, delay, updateState) {
        return __awaiter(this, void 0, void 0, function* () {
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
                updateState(`Removing multiples of <b>${currentNumber}</b>`);
                let currentNode = headNode.next;
                let color = this.colorManager.pop();
                //let color: string | null = null;
                headNode.markPrime(color);
                while (currentNode) {
                    yield new Promise((r) => setTimeout(r, delay));
                    if (currentNode.number % currentNumber == 0) {
                        //if (!color) color = this.colorManager.pop();
                        currentNode.mark(color);
                    }
                    currentNode = currentNode.next;
                }
                headNode = headNode.next;
            }
            while (headNode) {
                yield new Promise((r) => setTimeout(r, delay));
                headNode.markPrime('black');
                headNode = headNode.next;
            }
        });
    }
}
