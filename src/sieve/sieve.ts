import Grid from './Classes/Grid.js';

const gridElement = document.getElementById('grid');

const grid = new Grid(gridElement!);

const maxNumber = 100;

setupInputs();

function setupInputs() {
  const startElement = <HTMLInputElement>document.getElementById('min')!;
  const endElement = <HTMLInputElement>document.getElementById('max')!;

  startElement.onchange = startChanged;
  endElement.onchange = endChanged;

  const visualizeButton = document.getElementById('visualizebtn');
  visualizeButton.onclick = () => grid.visualize();

  function startChanged() {
    let start = parseInt(startElement.value);
    let end = parseInt(endElement.value);

    if (start > maxNumber) start = maxNumber;
    else if (start < 1) start = 1;
    startElement.value = String(start);

    if (start > end) {
      endElement.value = String(start);
    }
    grid.generateCells(start, end);
  }

  function endChanged() {
    let start = parseInt(startElement.value);
    let end = parseInt(endElement.value);
    if (end > maxNumber) end = maxNumber;
    else if (end < 1) end = 1;

    endElement.value = String(end);
    if (start > end) {
      startElement.value = String(end);
    }
    grid.generateCells(start, end);
  }
}

grid.generateCells(1, maxNumber);
