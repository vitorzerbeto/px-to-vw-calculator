const pxUnitInput = document.getElementById("px-unit");
const viewportWidthInput = document.getElementById("viewport-width");
const viewportHeightInput = document.getElementById("viewport-height");
const resultVwInput = document.getElementById("result-vw");
const resultVhInput = document.getElementById("result-vh");
const device = document.getElementById("device");
const displayScreenSize = document.getElementById("display-screen-size");

function calculateResult(viewport, pxUnit) {
  const result = (pxUnit / viewport) * 100;

  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function updateResultValue(viewportInput, resultInput, unit) {
  const viewport = parseInt(viewportInput.value);
  const pxUnit = parseInt(pxUnitInput.value);

  const result = calculateResult(viewport, pxUnit);

  if (!isNaN(result)) {
    resultInput.value = `${result}${unit}`;
  }
}

function updateDeviceSize() {
  const width = parseInt(viewportWidthInput.value);
  const height = parseInt(viewportHeightInput.value);
  const parent = device.parentNode;
  let scale = 1;

  if (parent.offsetWidth < width && parent.offsetHeight < height) {
    if (height > width) {
      scale = parent.offsetHeight / height;
    } else {
      scale = parent.offsetWidth / width;
    }
  } else if (parent.offsetWidth < width) {
    scale = parent.offsetWidth / width;
  } else if (parent.offsetHeight < height) {
    scale = parent.offsetHeight / height;
  }

  if (width / height > 0) {
    device.classList.add("mobile");
    // device.classList.remove("desktop");
  } else {
    device.classList.remove("mobile");
    // device.classList.add("desktop");
  }

  device.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
  device.style.width = `${width}px`;
  device.style.height = `${height}px`;

  displayScreenSize.innerText = `${width} x ${height}`;
}

window.addEventListener("load", () => {
  updateDeviceSize();
  device.style.opacity = "1";
  setTimeout(() => {
    device.style.transition = "all 0.3s ease-in-out";
  }, 10);
});

window.addEventListener("resize", () => {
  updateDeviceSize();
});

pxUnitInput.addEventListener("input", () => {
  updateResultValue(viewportWidthInput, resultVwInput, "vw");
  updateResultValue(viewportHeightInput, resultVhInput, "vh");
});

viewportWidthInput.addEventListener("input", (e) => {
  updateResultValue(e.target, resultVwInput, "vw");
  updateDeviceSize();
});

viewportHeightInput.addEventListener("input", (e) => {
  updateResultValue(e.target, resultVhInput, "vh");
  updateDeviceSize();
});

resultVwInput.addEventListener("click", (e) => {
  e.target.select();
});
resultVhInput.addEventListener("click", (e) => {
  e.target.select();
});
