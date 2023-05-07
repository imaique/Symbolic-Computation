export default class Cell {
  domElement: HTMLElement;

  constructor(number: number) {
    let cell = document.createElement('div');
    cell.innerText = String(number);
    cell.className = 'cell';
    cell.id = 'c' + number;

    this.domElement = cell;
  }
  addCellTo(grid: HTMLElement) {
    grid.appendChild(this.domElement);
  }
  mark(color: string) {
    this.domElement.style.backgroundColor = color;
  }
}
