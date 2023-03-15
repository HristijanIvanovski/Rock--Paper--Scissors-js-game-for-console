// define choices
let choices = ['rock', 'paper', 'scissors'];
// define player1 choice
let player1 = choices[Math.floor(Math.random() * 3)];
// define player2 choice
let player2 = choices[Math.floor(Math.random() * 3)];

// print player1 choice
console.log(`Player 1 chose ${player1}`);
// print player2 choice
console.log(`Player 2 chose ${player2}`);

// determine winner
// if player1 choice is the same as player2 choice
if (player1 === player2) {
    // print tie
    console.log('It\'s a tie!');
// else if player1 choice is rock and player2 choice is scissors
} else if ((player1 === 'rock' && player2 === 'scissors') ||
            // or if player1 choice is scissors and player2 choice is paper
           (player1 === 'scissors' && player2 === 'paper') ||
            // or if player1 choice is paper and player2 choice is rock
           (player1 === 'paper' && player2 === 'rock')) {
    // print player1 wins
    console.log('Player 1 wins!');
} else {
    // print player2 wins
    console.log('Player 2 wins!');
}