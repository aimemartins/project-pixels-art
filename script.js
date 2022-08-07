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
    for (let i = 0; i < colorPixels.length; i += 1) {
      colorPixels[i].style.backgroundColor = 'white'
    }
  }
  const button = document.getElementById('clear-board'); //(1)
  button.addEventListener('click', clearPixels); //(2)



  const input = document.getElementById('board-size');
  const pixel1 = document.getElementsByClassName('pixel');

  function changeSize() {
    for (let index = 0; index < pixel1.length; index += 1) {
      const larguraPixelBoard = input * pixel1[index];
      if (input > 0) {
        pixel1[index].style.width = input;
        pixel1[index].style.height = input;
      } else {
        alert('Board inválido!')
      }
    }
  }
  const buttonChangeSize = document.getElementById('generate-board');
  buttonChangeSize.addEventListener('click', changeSize);

  // --------------------------Requisito 12 ---------
  // Requisito pesquisado no site https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
  function randomColor1() {
    const lett = '0123456789ABCDEF';
    let color = '#';
    const optionColor1 = document.getElementById('optionColor1');
    for (let i = 0; i < 6; i++) {
      color += lett[Math.floor(Math.random() * 16)];
    } optionColor1.style.backgroundColor = color;
  }
  randomColor1();

  function randomColor2() {
    const lett = '0123456789ABCDEF';
    let color = '#';
    const optionColor2 = document.getElementById('optionColor2');
    for (let i = 0; i < 6; i++) {
      color += lett[Math.floor(Math.random() * 16)];
    } optionColor2.style.backgroundColor = color;
  }
  randomColor2();

  function randomColor3() {
    const lett = '0123456789ABCDEF';
    let color = '#';
    const optionColor3 = document.getElementById('optionColor3');
    for (let i = 0; i < 6; i++) {
      color += lett[Math.floor(Math.random() * 16)];
    } optionColor3.style.backgroundColor = color;
  }
  randomColor3();
};
