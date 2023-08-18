//equipe 1
const contarPontos = document.querySelector('#contar1');
const aumenta1Button = document.querySelector('#aumenta1');
const diminui1Button = document.querySelector('#diminui1');
const reinicia1Button = document.querySelector('#reiniciar1');
const truco1Button = document.querySelector('#truco1')

let pontos = 0;

const updateCount = () => {
  contarPontos.textContent = pontos;
}

aumenta1Button.addEventListener('click', () => {
  pontos++;
  updateCount();
});

diminui1Button.addEventListener('click', () => {
  pontos--;
  updateCount();
});

reinicia1Button.addEventListener('click', () => {
  pontos = 0;
  updateCount();
});

truco1Button.addEventListener('click', () => {
    pontos + 3;
    updateCount();
})

function gerarCor()
{
  var r,g,b;
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  return 'rgb('+r+','+g+','+b+')';
}
function mudarAqui(elemento)
{
  var novaCor = gerarCor();
  elemento.style.backgroundColor = novaCor;
}
function mudarPar()
{
  var numeroPar = document.getElementsByClassName("par");
  var novaCor = gerarCor();
  for (let i of numeroPar)
  {
    i.style.backgroundColor = novaCor;
  }
}
function mudarImpar()
{
  let numeroImpar = document.getElementsByClassName("impar");
  var novaCor = gerarCor();
  for (let i of numeroImpar)
  {
    i.style.backgroundColor = novaCor;
  }
}
function apagarTudo()
{
  let apagar = document.getElementsByTagName("div");
  for (let i of apagar)
  {
    i.style.backgroundColor = "white";
  }
}