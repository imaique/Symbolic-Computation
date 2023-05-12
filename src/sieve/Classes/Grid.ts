import Cell from './Cell.js';
import NodeSieveVisualizer from './NodeSieveVisualizer.js';

export default class Grid {
  gridElement: HTMLElement;
  stateElement: HTMLElement;
  cells: Array<Cell>;
  end: number;

  constructor(gridElement: HTMLElement) {
    this.gridElement = gridElement;
    this.cells = [];
    this.end = 100;
    this.stateElement = document.getElementById('state');
  }
  updateState(s: string) {
    console.log(this.stateElement);
    this.stateElement.innerHTML = s;
  }

  generateCells(start: number, end: number) {
    this.reset();
    this.end = end;
    for (let i = start; i <= end; i++) {
      let cell = new Cell(i);
      cell.addCellTo(this.gridElement);
      this.cells.push(cell);
    }
  }
  reset() {
    this.gridElement.innerHTML = '';
    this.cells = [];
  }

  visualize() {
    const visualizer = new NodeSieveVisualizer();
    visualizer.visualize(this.cells, this.end, 10, this.updateState.bind(this));
  }
}
