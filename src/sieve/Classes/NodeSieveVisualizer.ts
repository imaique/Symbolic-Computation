import Cell from './Cell.js';
import ColorManager from './ColorManager.js';

class Node {
  number: number;
  next: Node | null;
  prev: Node | null;
  cell?: Cell;

  constructor(number: number, next: Node | null, cell?: Cell) {
    this.cell = cell;
    this.next = next;
    this.number = number;
  }

  mark(color: string) {
    if (this.cell) this.cell.mark(color);

    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
  }
  markPrime(color: string) {
    if (this.cell) this.cell.markPrime(color);
  }
}
// Make abstract class Visualizer
export default class NodeSieveVisualizer {
  colorManager: ColorManager;
  constructor() {
    this.colorManager = new ColorManager();
  }
  async visualize(
    cells: Array<Cell>,
    end: number,
    delay: number,
    updateState: Function
  ) {
    let nextNode = null;
    for (let i = end, j = cells.length - 1; i >= 2; i--, j--) {
      let currentCell = j >= 0 ? cells[j] : undefined;
      let node = new Node(i, nextNode, currentCell);
      if (nextNode) nextNode.prev = node;
      nextNode = node;
    }

    let lastNumber: number = Math.sqrt(end);

    let headNode: Node = nextNode;
    while (headNode.number <= lastNumber) {
      const currentNumber = headNode.number;
      updateState(`Removing multiples of <b>${currentNumber}</b>`);
      let currentNode = headNode.next;
      let color = this.colorManager.pop();
      //let color: string | null = null;
      headNode.markPrime(color);
      while (currentNode) {
        await new Promise((r) => setTimeout(r, delay));
        if (currentNode.number % currentNumber == 0) {
          //if (!color) color = this.colorManager.pop();
          currentNode.mark(color);
        }
        currentNode = currentNode.next;
      }
      headNode = headNode.next;
    }
    while (headNode) {
      await new Promise((r) => setTimeout(r, delay));
      headNode.markPrime('black');
      headNode = headNode.next;
    }
  }
}
