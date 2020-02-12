// ============================================
//
// NUMBER GUESSING GAME:
// The program generators a random 4 digit number.
// The user must submit their 4 digit number 
// guess, 1 digit at a time. The player receives
// points based on how many digits match between 
// the two numbers. 
//
// ==============================================

"use strict";

// Creates user's guess
function createUserGuess() {
    let userGuess = [];
    
    for(let i = 0; i < 4; i++){
        userGuess[i] = getUserInput();
    }

    return userGuess;
}

// Gathers digits for the user's guess
function getUserInput() {
    let guess;
    let compare = /[0-9]{1}/;

    do {
        guess = prompt("Please enter a number [0-9]");
        if (!guess.match(compare) || guess > 9) alert("That was an invalid entry... Try again.");
    } while (!guess.match(compare) || guess > 9);

    return +guess;
}

// Creates the winning number randomly 0-9
function createWinningNum() {
    let winningNumber = [];

    for(let i = 0; i < 4; i++){
        winningNumber[i] = Math.floor(Math.random() * 10);
    }

    return winningNumber;
}

// Checks for matches
function checkWinningNumber(userGuess, winningNumber) {
    let matchingNumbers = 0;

    for(let i = 0; i < winningNumber.length; i++){
        if(winningNumber[i] === userGuess[i]) matchingNumbers++;
    }

    return matchingNumbers;
}

// Displays the final score
function displayPrize(winningNumber, userGuess, matchingNumbers) {
    const prizes = {
        0 : "0",
        1 : "5",
        2 : "100",
        3 : "2,000",
        4 : "1,000,000",
    };

    alert(`===== FINAL SCORE =====\n
           WINNING NUMBER: ${winningNumber.join('')}\n
           YOUR GUESS: ${userGuess.join('')}\n
           NUMBERS MATCHED: ${matchingNumbers}\n
           FINAL SCORE: ${prizes[matchingNumbers]} POINTS`
    );
}

// Main logic 
(function mainGame(){
    let winningNumber = createWinningNum(); 
    let userGuess = createUserGuess();
    let matchingNumbers = checkWinningNumber(userGuess, winningNumber);

    displayPrize(winningNumber, userGuess, matchingNumbers);
})();