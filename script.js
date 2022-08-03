// Requisito 6 - Defina a cor preta como cor inicial da paleta de cores
window.onload = function () {
  function onloadColor() {
    // - Capturar o id black em uma variável fisrtColor:
    const firstColor = document.getElementById('black');
    // - Adicionar a variável uma class chamada selected:
    firstColor.classList.add('selected');
  }
  // - Chamar a função
  onloadColor();

  //------------ Requisito 7 ---------------- Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro:
  function captureColor(event) {
    const clickColor = event.target;
    const colorCapture = document.querySelector('.selected');
    colorCapture.classList.remove('selected');
    clickColor.classList.add('selected');
  }
  const changeColor = document.getElementById('color-palette'); // Capturar o elemento pai em uma variável (1)
  changeColor.addEventListener('click', captureColor); // Adicionar um escutador para o clique e executar a função (2)

  // Requisito 8
  function paintPixels(event2) {
    const corClicada = event2.target;
    const colorCapture = document.querySelector('.selected');
    const cor = getComputedStyle(colorCapture).backgroundColor;
    corClicada.style.backgroundColor = cor;
  }
  const colorPixels = document.getElementById('pixel-board');
  colorPixels.addEventListener('click', paintPixels);

  // Requisito 9
  function clearPixels() {
    const colorPixels = document.getElementsByClassName('pixel');
   for (let i = 0; i < colorPixels.length; i +=1 ) {
    colorPixels[i].style.backgroundColor = 'white'
   }
  }
  const button = document.getElementById('clear-board'); //(1)
  button.addEventListener('click', clearPixels); //(2)
};