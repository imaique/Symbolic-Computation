export default class Cell {
  backgroundElement: HTMLElement;
  numberElement: HTMLElement;

  constructor(number: number) {
    let cell = document.createElement('div');
    cell.innerText = '';
    cell.className = 'cell';
    cell.id = 'c' + number;

    this.backgroundElement = cell;

    this.numberElement = document.createElement('div');
    this.numberElement.textContent = String(number);
    this.backgroundElement.appendChild(this.numberElement);
  }
  addCellTo(grid: HTMLElement) {
    grid.appendChild(this.backgroundElement);
  }
  mark(color: string) {
    this.backgroundElement.style.backgroundColor = color;
  }
  markPrime(color: string) {
    this.numberElement.classList.add('circle');
    this.numberElement.style.borderColor = color;
  }
}
