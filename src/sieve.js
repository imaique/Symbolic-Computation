const gridElement = document.getElementById('grid');

setupInputs();

function setupInputs() {
  const startElement = document.getElementById('min');
  const endElement = document.getElementById('max');
  startElement.onchange = startChanged;
  endElement.onchange = endChanged;

  function startChanged() {
    let start = parseInt(startElement.value);
    let end = parseInt(endElement.value);

    if (start > 100) start = 100;
    else if (start < 1) start = 1;
    startElement.value = start;

    if (start > end) {
      endElement.value = start;
    }
  }

  function endChanged() {
    let start = parseInt(startElement.value);
    let end = parseInt(endElement.value);
    if (end > 100) end = 100;
    else if (end < 1) end = 1;

    endElement.value = end;
    if (start > end) {
      startElement.value = end;
    }
  }
}

function generateCells(end) {}
