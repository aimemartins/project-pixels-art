// Requisito 6
window.onload = function () {
  function onloadColor() {
    const firstColor = document.getElementById('black');
    firstColor.classList.add('selected');
  }
  onloadColor();
  // Requisito 7
  function captureColor(event) {
    const clickColor = event.target;
    const colorCapture = document.querySelector('.selected');
    colorCapture.classList.remove('selected');
    clickColor.classList.add('selected');
  }
  const changeColor = document.getElementById('color-palette');
  changeColor.addEventListener('click', captureColor);

  // Requisito 8
  function paintPixels(event2) {
    const corClicada = event2.target;
    const colorCapture = document.querySelector('.selected');
    const cor = getComputedStyle(colorCapture).backgroundColor;
    corClicada.style.backgroundColor = cor;
  }
  const colorPixels = document.getElementById('pixel-board');
  colorPixels.addEventListener('click', paintPixels);
};
