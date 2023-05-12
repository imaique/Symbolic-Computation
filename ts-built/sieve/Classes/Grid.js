import Cell from './Cell.js';
import NodeSieveVisualizer from './NodeSieveVisualizer.js';
export default class Grid {
    constructor(gridElement) {
        this.gridElement = gridElement;
        this.cells = [];
        this.end = 100;
        this.stateElement = document.getElementById('state');
    }
    updateState(s) {
        console.log(this.stateElement);
        this.stateElement.innerHTML = s;
    }
    generateCells(start, end) {
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
