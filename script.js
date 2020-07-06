//initialize variables to hold the values for game type and number of rounds played
let gameCounter,gameType;

//initialize the game comments and result display variables
let pane1 = document.getElementById('pane1');
let pane2 = document.getElementById('pane2');
let pane4 = document.getElementById('pane4');
let display1 = document.createElement('h3');
let display2 = document.createElement('p');
let display3 = document.createElement('p');
let display4 = document.createElement('h3');
pane1.appendChild(display1);
pane2.appendChild(display2);
pane2.appendChild(display3);
pane4.appendChild(display4);

//initialize the scoreboard variables
let yourDisplay = document.getElementById('d2ay');
let compDisplay = document.getElementById('d2by');
let yourScore = document.createElement('p');
let computerScore = document.createElement('p');
yourDisplay.appendChild(yourScore);
compDisplay.appendChild(computerScore);

//the function to supply computer's game choices
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.round(Math.random()*2)];
    return computerChoice;
}

//this function is called implicitly from the Update() function each time Player makes a choice.
//the function plays a round of the game and then returns a value that is passed on the Update function. 
//the "playerSelection" argument is harded-coded to each of the rock/paper/scissors HTML button tags (see lines 34-36 of index.html file)
function playRound(playerSelection) {
    computerSelection = computerPlay();        
    
    if (computerSelection == 'Rock') {            
        if (playerSelection == 'Paper') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: Paper covers Rock! YOU win this round.`;                
            return '1';
        } else if (playerSelection == 'Scissors') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: Rock beats Scissors! COMPUTER wins this round!`; 
            return '2';
        } else if (playerSelection == 'Rock') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: IT'S A TIE! Replay the round by choosing again.`;
            return '3';
        }
    } 
    else if (computerSelection == 'Paper') {
        if (playerSelection == 'Paper') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: IT'S A TIE! Replay the round by choosing again.`;
            return '3';
        } else if (playerSelection == 'Scissors') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: Scissors cuts Paper! YOU win this round.`;                
            return '1';
        } else if (playerSelection == 'Rock') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: Paper covers Rock! COMPUTER wins this round.`;                
            return '2';
        }
    } 
    else if (computerSelection == 'Scissors') {
        if (playerSelection == 'Paper') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = "- OUTCOME:: Scissors cuts Paper! COMPUTER wins this round. -";               
            return '2';
        } else if (playerSelection == 'Scissors') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: IT'S A TIE! Replay the round by choosing again.`;
            return '3';
        } else if (playerSelection == 'Rock') {
            display2.textContent = `Your choice: ${playerSelection}; Computer chooses: ${computerSelection}.`;
            display3.textContent = `- OUTCOME:: Rock beats Scissors! YOU win this round.`;                
            return '1';
        }
    }
}

//Receives a value from playRound(), determines the round winner, updates scores, and determines if the game is over.
function update(num) {
    let value;
    if (num == '1') {
        gameCounter += 1;
        value = Number(yourScore.textContent) + 1;
        yourScore.textContent = value;
    }
    else if (num == '2') {
        gameCounter += 1;
        value = Number(computerScore.textContent) + 1;
        computerScore.textContent = value;
    }
    if (gameType <= gameCounter) {
        rock1.disabled = true;
        paper1.disabled = true;
        scissors1.disabled = true;
        round1.disabled = true;
        game1.disabled = true;
        if (gameType == 5) display1.textContent = `- FINAL ROUND Result:-`;
        checkResults();
    }
    else {
        if (gameCounter == '') {
            display1.textContent = `- ROUND ${gameCounter+1} Result:-`;
        } 
        else {
            display1.textContent = `- ROUND ${Number(yourScore.textContent)+Number(computerScore.textContent)} Result:-`;
        }
        display4.textContent = `Continue play:: Rock, Paper or Scissors?`;
    }
}

//called from update() to determine the final winner of the game
function checkResults () {
    let yScore = Number(yourScore.textContent);
    let cScore = Number(computerScore.textContent);
    if (yScore > cScore) {
        display4.textContent = `\n\nFINAL RESULT:: YOU WIN THE GAME! CONGRATULATIONS!!`;
    }
    else {
        display4.textContent = `\n\nFINAL RESULT:: COMPUTER WINS THE GAME! BETTER LUCK NEXT TIME!`;
    }        
}

//called when player wants a one-off game and activates game buttons
function oneRoundGame() {
    gameType = 1;
    rock1.disabled = false;
    paper1.disabled = false;
    scissors1.disabled = false;
    display1.textContent = `- ONE-ROUND GAME -`;
    display2.textContent = `Make your choice: Rock, Paper, or Scissors?`;
}

//called when player wants a 5-round game and activates game buttons
function fiveRoundGame() {
    gameType = 5;
    rock1.disabled = false;
    paper1.disabled = false;
    scissors1.disabled = false;
    display1.textContent = `- ROUND ${gameCounter+1} -`;
    display2.textContent = `Make your choice: Rock, Paper, or Scissors?`;
}

//called by the Reset button; deactivates game buttons and clears the game of all displays and values
function resetGame() {
    display1.textContent = '';
    display2.textContent = '';
    display3.textContent = '';
    display4.textContent = '';
    round1.disabled = false;
    game1.disabled = false;
    yourScore.textContent = 0;
    computerScore.textContent = 0;
    gameCounter = 0;
    gameType = 0;
    loadGame();
}

//initialized as soon as page loads
function loadGame() {
    gameCounter = 0;
    rock1.disabled = true;
    paper1.disabled = true;
    scissors1.disabled = true;
    yourScore.textContent = 0;
    computerScore.textContent = 0;
    display1.textContent = "GAME | ROUND";
    display2.textContent = `To play, choose either the 1-Off Game or the 5-Round Game.`
}
    
const Rock = 'Rock', Paper = 'Paper', Scissors = 'Scissors';

loadGame();