const choice = ['rock', 'paper', 'scissors']
// let getComputerChoice = Math.floor(Math.random() * choice.length);
// console.log(choice[getComputerChoice]);
// THIS 
let playerscore = 0;
let computerscore = 0;
function playRound(playerSelection, computerSelection) {
    let getComputerChoice = Math.floor(Math.random() * choice.length);
    let answer = prompt('please enter your choice.');
    playerSelection = answer.toLowerCase() ; 
    computerSelection = choice[getComputerChoice];
/ask user for an answer via prompt. puts that answer in lower case to align with computerchoices/ 
if (choice.includes(playerSelection)){
if (playerSelection == computerSelection) {
    return `you both chose ${playerSelection}`
}

else {
    if (( playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection=='scissors' && computerSelection == 'paper'))
{
    playerscore += 1;
    return `you win ${playerSelection} beats ${computerSelection}`;
 }
 else {
    computerscore += 1;
    return `you lose ${computerSelection} beats ${playerSelection} `
    
}
}
}

else {
    return(`please choose a valid option`)
}
}


function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`you have scored ${playerscore} points!`);
        console.log(`Computer has scored ${computerscore} points!`);
    }
    if (playerscore > computerscore) {
        console.log(`you scored ${playerscore} points against the computer's measily ${computerscore}, Good job!`)
    }
    else {
        console.log(`you got wrecked by the computer's ${computerscore} points, you only scored ${playerscore} points`)
    }
}
