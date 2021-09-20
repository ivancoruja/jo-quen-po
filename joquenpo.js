let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const score_div = document.querySelector('.score');
const outcome_p = document.querySelector('.outcome > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function translate(move) {
  if (move === 'rock') return 'Pedra';
  if (move === 'paper') return 'Papel';
  else return 'Tesoura';
}

function win(playerChoice, computerChoice) {
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  outcome_p.innerHTML = `${translate(playerChoice)} vence ${translate(computerChoice)}... Você ganhou!`;
  playerChoice_div.classList.add('green-glow');
  setTimeout(() => playerChoice_div.classList.remove('green-glow') , 1000);
}

function lose(playerChoice, computerChoice) {
  const playerChoice_div = document.getElementById(playerChoice);
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  outcome_p.innerHTML = `${translate(computerChoice)} vence ${translate(playerChoice)}... Você perdeu!`;
  playerChoice_div.classList.add('red-glow');
  setTimeout(() => playerChoice_div.classList.remove('red-glow'), 1000);
}

function draw(playerChoice) {
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  outcome_p.innerHTML = `Ambos escolheram ${translate(playerChoice)}... Empate!`;
  playerChoice_div.classList.add('gray-glow');
  setTimeout(() => playerChoice_div.classList.remove('gray-glow'), 1000);
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice);
      break;
  } 
}

function main() {
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));
}

main();