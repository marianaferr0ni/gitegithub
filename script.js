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