// Requisito 6
window.onload = function () {
  function onloadColor() {
    const firstColor = document.getElementById('black');
    firstColor.classList.add('selected');
  }

  onloadColor();

  // Criar selected
  function captureColor(event) {
    const clickColor = event.target;
    const colorCapture = document.querySelector('.selected');
    colorCapture.classList.remove('selected');
    clickColor.classList.add('selected');
  }
  const changeColor = document.getElementById('color-palette');
  changeColor.addEventListener('click', captureColor);
};
