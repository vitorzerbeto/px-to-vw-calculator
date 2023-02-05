const pxUnitInput = document.getElementById('px-unit');
const viewportSizeInput = document.getElementById('viewport-size');
const resultInput = document.getElementById('result');

function calculateResult(viewport, pxUnit) {
  const result = pxUnit / viewport * 100;

  return Math.round((result + Number.EPSILON) * 100) / 100
}

function updateResultValue() {
  const viewport = parseInt(viewportSizeInput.value);
  const pxUnit = parseInt(pxUnitInput.value);

  const result = calculateResult(viewport, pxUnit);

  if(!isNaN(result)) {
    resultInput.value = `${result}vw`;
  }
}

pxUnitInput.addEventListener('input', () => {
  updateResultValue()
});

viewportSizeInput.addEventListener('input', () => {
  updateResultValue()
});

resultInput.addEventListener('click', (e) => {
  e.target.select();
});