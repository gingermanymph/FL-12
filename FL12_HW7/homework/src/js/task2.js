// Your code goes here
const multiply = 2;
const prizes = {};
const minAttempts = 3;
const rangeStep = 4;
const minRange = 8;
let currentRange;
let userAttempt;
let pocket;
let userAnswer;
let userPrize;

// Step 1
let playConfirm = confirm('Do you want to play a game?');
let game = playConfirm ? true : alert('You did not become a billionaire, but can.');

// Step 2
// Starrt a game
while (game) {
    // default game setting
    prizes['3'] = 100;
    prizes['2'] = 50;
    prizes['1'] = 25;

    currentRange = minRange;
    userAttempt = minAttempts;
    userPrize = 0;

    pocket = String(Math.round(Math.random() * currentRange));
    // Rounds
    while (userAttempt !== 0) {
        userAnswer = prompt(`
        Chose a roulette pocket number from 0 to ${currentRange}
        Attempts left: ${userAttempt}
        Total prize: ${userPrize}
        Possible prize on current attempt: ${prizes[userAttempt]}`, pocket);

        if (userAnswer !== pocket) {
            userAttempt--;
            if (userAttempt === 0) {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                playConfirm = confirm('Do you want to play a game?');
                game = playConfirm ? playConfirm : false;
                break;
            }
            continue;
        } else {
            userPrize += prizes[userAttempt]
            playConfirm = confirm(`Congratulation, you won! Your prize is: ${userPrize} $. Do you want to continue?`);
            if (!playConfirm) {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                playConfirm = confirm('Do you want to play again?');
                game = playConfirm ? playConfirm : false;
                break;
            } else {
                prizes['3'] = prizes['3'] * multiply;
                prizes['2'] = prizes['2'] * multiply;
                prizes['1'] = prizes['1'] * multiply;

                currentRange += rangeStep;
                userAttempt = minAttempts;
                pocket = String(Math.round(Math.random() * currentRange));
                continue;
            }
        }
    }
}