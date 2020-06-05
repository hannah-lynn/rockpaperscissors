const game = () => {
  let cScore = 0;
  let pScore = 0;

  // Start Game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  // PLay Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const player = document.querySelector('.player-icon');
    const comp = document.querySelector('.comp-icon');
    //Comp options
    const compOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        const compNum = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNum];
        //Activate update text
        compareIcons(this.textContent, compChoice);

        //Update Images
        player.src = `./assets/${this.textContent}.png`;
        comp.src = `./assets/${compChoice}.png`;
      });
    });

    compOptions[compNum];
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const compScore = document.querySelector('.comp-score p');

    playerScore.textContent = pScore;
    compScore.textContent = cScore;
  };

  const compareIcons = (playerChoice, compChoice) => {
    //Update text
    const winner = document.querySelector('.winner');
    if (playerChoice === compChoice) {
      winner.textContent = 'Draw';
      return;
    }
    //Check for rock
    if (playerChoice === 'rock') {
      if (compChoice === 'scissors') {
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === 'scissors') {
      if (compChoice === 'paper') {
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for paper
    if (playerChoice === 'paper') {
      if (compChoice === 'rock') {
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // Call the functions
  startGame();
  playMatch();
};
// Start Game
game();
