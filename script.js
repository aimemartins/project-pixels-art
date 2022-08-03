window.onload = () => {
  function onloadColor() {
    const firstColor = document.getElementById('black');
    firstColor.classList.add('selected');
  }
  onloadColor();

  // Criar selected
  function changeSelected(event) {
    const colorSelected = document.getElementsByClassName('selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  // Capturar elemento que será pai
  const colorPalette = document.getElementById('color-palette');
  // Chama o evento
  colorPalette.addEventListener('click', changeSelected);
};