var result = {
    player: 0,
    computer: 0
}

// computer returns it's answer
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let ans = options[Math.floor(Math.random() * options.length)];
    return ans;
}

// determine winner between user and pc and return answer
function playRound(playerSelection, computerSelection) {
    let winner = '';
    if (playerSelection == computerSelection) {
        return winner = 'tie';
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper') || 
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        return winner = 'player';
    } else return winner = 'computer';
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    roundWinner = playRound(playerSelection, computerSelection);
    switch(roundWinner) {
        case 'tie':
            p.textContent = ("It's a tie! Both entered " + computerSelection);
            break;
        case 'player':
            result.player++;
            p.textContent = ('You win! ' + playerSelection + ' beats ' + computerSelection);
            break;
        case 'computer':
            result.computer++;
            p.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
            break;
    }
    p2.textContent = (`Current score is Player ${result.player} : ${result.computer} Computer`);

    if (result.player == 5 || result.computer == 5) {
        gameOver();
    }
}

// decide and announce game winner
function gameOver() {
    let showText = 'Game over! '
    if(result.player == result.computer) {
        showText += (`It's a tie! Player ${result.player} : ${result.computer} Computer.`);
    } else if (result.player > result.computer) {
        showText += (`You win! Player ${result.player} : ${result.computer} Computer.`)
    } else showText += (`You lose! Player ${result.player} : ${result.computer} Computer.`)
    result = {
        player: 0,
        computer: 0
    }
    p.textContent = showText;
    p2.textContent = "Click to play again."; 
}


const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('text');
const p = document.createElement('p');
const p2 = document.createElement('p');
p.textContent = "Welcome to the game of Rock, Paper and Scissors."
p2.textContent = "Play against the computer by just clicking on the buttons. First to 5 wins."
div.appendChild(p);
div.appendChild(p2);
body.appendChild(div)


buttons.forEach((button) => {

  button.addEventListener('click', () => {
    const playerSelection = button.id;
    game(playerSelection);
  });

  button.addEventListener('mouseenter', () => {
    button.classList.add('transition');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('transition');
  });
});


