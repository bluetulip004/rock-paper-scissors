"use strict";
let playerScore = 0;
let compScore = 0;
const choices = ['rock', 'paper', 'scissors'];
function game(){

    for(let i = 0; i < 5; i++){
        let playerTemp = prompt("What are you going to choose?\n(Options are rock, paper, scissors)");
        let compTemp = choices[Math.floor(Math.random() * choices.length)];
        console.log(`You chose ${playerTemp}`);
        console.log(`Computer chose ${compTemp}`);
        console.log(playRound(playerTemp, compTemp));
    }

    return playerScore > compScore ? "You win the game." : "You lost the game.";
}


function playRound(playerSelection, computerSelection){
    const compSelect = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    const playerSelect = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelect === compSelect){
        return "draw";
    }
    else if(playerSelect === "Rock"){
        if(compSelect === "Paper"){
            compScore++;
            return `You lost this round. ${compSelect} beats ${playerSelect}`;
        }else{
            playerScore++;
            return `You win this round. ${playerSelect} beats ${compSelect}`;
        }
    }
    else if(playerSelect === "Paper"){
        if(compSelect === "Scissors"){
            compScore++;
            return `You lost this round. ${compSelect} beats ${playerSelect}`;
        }else{
            playerScore++;
            return `You win this round. ${playerSelect} beats ${compSelect}`;
        }
    }
    else if(playerSelect === "Scissors"){
        if(compSelect === "Rock"){
            compScore++;
            return `You lost this round. ${compSelect} beats ${playerSelect}`;
        }else{
            playerScore++;
            return `You win this round. ${playerSelect} beats ${compSelect}`;
        }
    }
    return "Invalid."
}


console.log(game());