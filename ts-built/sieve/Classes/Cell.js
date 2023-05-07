export default class Cell {
    constructor(number) {
        let cell = document.createElement('div');
        cell.innerText = String(number);
        cell.className = 'cell';
        cell.id = 'c' + number;
        this.domElement = cell;
    }
    addCellTo(grid) {
        grid.appendChild(this.domElement);
    }
    mark(color) {
        this.domElement.style.backgroundColor = color;
    }
}
