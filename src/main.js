const pxUnitInput = document.getElementById('px-unit');
const viewportWidthInput = document.getElementById('viewport-width');
const viewportHeightInput = document.getElementById('viewport-height');
const resultVwInput = document.getElementById('result-vw');
const resultVhInput = document.getElementById('result-vh');

function calculateResult(viewport, pxUnit) {
  const result = pxUnit / viewport * 100;

  return Math.round((result + Number.EPSILON) * 100) / 100
}

function updateResultValue(viewportInput, resultInput, unit) {
  const viewport = parseInt(viewportInput.value);
  const pxUnit = parseInt(pxUnitInput.value);

  const result = calculateResult(viewport, pxUnit);

  if(!isNaN(result)) {
    resultInput.value = `${result}${unit}`;
  }
}

pxUnitInput.addEventListener('input', () => {
  updateResultValue(viewportWidthInput, resultVwInput, 'vw');
  updateResultValue(viewportHeightInput, resultVhInput, 'vh');
});

viewportWidthInput.addEventListener('input', (e) => {
  updateResultValue(e.target, resultVwInput, 'vw');
});

viewportHeightInput.addEventListener('input', (e) => {
  updateResultValue(e.target, resultVhInput, 'vh');
});

resultVwInput.addEventListener('click', (e) => {
  e.target.select();
});