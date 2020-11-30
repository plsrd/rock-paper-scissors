const roundOutput = document.getElementById('roundOutput');
const chooseWeapon = document.getElementById('chooseWeapon');
const playerChoices = document.getElementById('playerChoices')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');
const roundSummary = document.getElementById('roundSummary');
const playerPoints = document.getElementById('playerPoints');
const computerPoints = document.getElementById('computerPoints');
const playerSummary = document.getElementById('playerSummary');
const playerImage = document.getElementById('playerImage');
const computerSummary = document.getElementById('computerSummary');
const computerImage = document.getElementById('computerImage');
const cScore = document.getElementById('computerScore');
const pScore = document.getElementById('playerScore');
const container = document.getElementById('headingContainer');

const button = document.createElement('button');
const p = document.createElement('p');

let playerScore = 0;
let computerScore = 0;
let playerMove;
let computerMove;


let playCount = 1;

playerPoints.textContent = `${playerScore}`;
computerPoints.textContent = `${computerScore}`;

roundOutput.addEventListener("click", () => {
  roundOutput.classList.remove("pulse");
  roundOutput.classList.add('invisible');
  chooseWeapon.classList.remove('invisible');
  playerChoices.classList.remove('invisible');
  playerChoices.classList.add('pulse');

});

function checkScore() {
  if (playCount < 5) {
    playCount += 1;
  } else {
    playerChoices.classList.add('invisible');
    chooseWeapon.classList.add('pulse');
    playerChoice.classList.remove('pulse');
    computerChoice.classList.remove('pulse');
    container.appendChild(button);
    button.appendChild(p);
    button.classList.add('pulse');
    p.textContent = 'Play again';
    button.addEventListener('click', () => {
      location.reload();
    });
    if (playerScore > computerScore) {
      chooseWeapon.textContent = 'You win the game!';
      pScore.classList.add('pulse');
      button.classList.add('win');
    } else if (computerScore > playerScore) {
      chooseWeapon.textContent = 'The computer wins the game!';
      button.classList.add('lose');
      cScore.classList.add('pulse');
    } else {
      chooseWeapon.textContent = 'You tied (which is basically losing)!';
    }
  }
}

function computerPlay() {

  const choices = ['rock', 'paper', 'scissors'];
  
  //function for picking a random numer
  function getIndex(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //get random index and store in a variable
  let num = getIndex(0, choices.length-1);

  return choices[num];
}


function playRound(playerSelection, computerSelection) {
  playerChoice.classList.add('border');
  playerChoice.classList.remove('pulse');
  computerChoice.classList.add('border');
  computerChoice.classList.remove('pulse');
  roundOutput.classList.remove('invisible');
  playerSummary.classList.remove('invisible');
  computerSummary.classList.remove('invisible');
  chooseWeapon.textContent = 'Next round';
  computerImage.src = `images/${computerMove}.png`;
  
  if (playerSelection === 'rock'){
    switch (computerSelection) {
      case 'rock' : 
        result.textContent = 'Tie!';
        roundSummary.textContent = 'How lame...';
        roundOutput.classList.remove('win');
        roundOutput.classList.remove('lose');
        checkScore();
        break;
      case 'paper' :
        result.textContent = 'You lose!';
        roundSummary.textContent = 'Paper beats rock';
        computerChoice.classList.add('pulse');
        computerScore += 1;
        computerPoints.textContent = `${computerScore}`;
        roundOutput.classList.add('lose');
        checkScore();
        break;
      case 'scissors' :
        result.textContent = 'You win!';
        roundSummary.textContent = 'Rock beats scissors';
        playerChoice.classList.add('pulse');
        playerScore += 1;
        playerPoints.textContent = `${playerScore}`;
        roundOutput.classList.add('win');
        checkScore();
        break;
      default : 
        alert('rock broke');
    }
  } else if (playerSelection === 'paper') {
      switch (computerSelection) {
        case 'rock' : 
          result.textContent = 'You win!';
          roundSummary.textContent = 'Paper beats rock';
          playerChoice.classList.add('pulse');
          playerScore += 1;
          playerPoints.textContent = `${playerScore}`;
          roundOutput.classList.add('win');
          checkScore();
          break;
        case 'paper' :
          result.textContent = 'Tie!';
          roundSummary.textContent = 'How lame...';
          roundOutput.classList.remove('win');
          roundOutput.classList.remove('lose');
          checkScore();
          break;
        case 'scissors' :
          result.textContent = 'You lose!';
          roundSummary.textContent = 'Scissors beats Paper';
          computerChoice.classList.add('pulse');
          computerScore += 1;
          computerPoints.textContent = `${computerScore}`;
          roundOutput.classList.add('lose');
          checkScore();
          break;
        default : 
          alert('paper broke');
      }
    } else {
        switch (computerSelection) {
          case 'rock' : 
            result.textContent = 'You lose!';
            roundSummary.textContent = 'Rock beats scissors';
            computerChoice.classList.add('pulse');
            computerScore += 1;
            computerPoints.textContent = `${computerScore}`;
            roundOutput.classList.add('lose');
            checkScore();
            break;
          case 'paper' :
            result.textContent = 'You win!';
            roundSummary.textContent = 'Scissors beats paper';
            playerChoice.classList.add('pulse');
            playerScore += 1;
            playerPoints.textContent = `${playerScore}`;
            roundOutput.classList.add('win');
            checkScore();
            break;
          case 'scissors' :
            result.textContent = 'Tie!';
            roundSummary.textContent = 'How lame...';
            roundOutput.classList.remove('win');
            roundOutput.classList.remove('lose');
            checkScore();
            break;
          default : 
            alert('scissors broke');
        }
    }
}


paper.addEventListener('click', () => {
  playerImage.src = "images/paper.png";
  playerMove = 'paper';
  computerMove = computerPlay();
  playRound(playerMove, computerMove);
});

scissors.addEventListener('click', () => {
  playerImage.src = "images/scissors.png";
  playerMove = 'scissors';
  computerMove = computerPlay();
  playRound(playerMove, computerMove);
});

rock.addEventListener('click', () => {
  playerImage.src = "images/rock.png";
  playerMove = 'rock';
  computerMove = computerPlay();
  playRound(playerMove, computerMove);
});