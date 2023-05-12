export default class Cell {
    constructor(number) {
        let cell = document.createElement('div');
        cell.innerText = '';
        cell.className = 'cell';
        cell.id = 'c' + number;
        this.backgroundElement = cell;
        this.numberElement = document.createElement('div');
        this.numberElement.textContent = String(number);
        this.backgroundElement.appendChild(this.numberElement);
    }
    addCellTo(grid) {
        grid.appendChild(this.backgroundElement);
    }
    mark(color) {
        this.backgroundElement.style.backgroundColor = color;
    }
    markPrime(color) {
        this.numberElement.classList.add('circle');
        this.numberElement.style.borderColor = color;
    }
}
