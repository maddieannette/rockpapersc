let gameChoice = ['buttonrock', 'buttonpaper', 'buttonscissors'];
let round = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[randomNumber];
}

function playRound(playerSelection) {
    let computerSelection=computerPlay(); 
    if (playerSelection === 'buttonrock' && computerSelection === 'buttonscissors' ||
        playerSelection === 'buttonpaper' && computerSelection === 'buttonrock' ||
        playerSelection === 'buttonscissors' && computerSelection === 'buttonpaper')
        document.getElementById("result").innerHTML="YOU WIN";
        return 'YOU WIN!';
}
const playerSelection = 'buttonrock'
const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))