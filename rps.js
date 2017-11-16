
// set variables to 0
computerScore = 0
playerScore = 0
tieScore = 0

// monitor buttons for clicks
// run functions to set userPick, computerPick, scoreTally
document.getElementById('btn').addEventListener('click', functionGroup);
document.getElementById('btn1').addEventListener('click', functionGroup);
document.getElementById('btn2').addEventListener('click', functionGroup);

// group all functions into one function
function functionGroup() {
    btnClick ()
    pickRps ()
    decideWinner ()
}

// define userPick
function btnClick () {
    userPick = 'Rock'
}
function btnClick1 () {
    userPick = 'Paper'
}
function btnClick2 () {
    userPick = 'Scissors'
}


// randomly pick 0, 1, or 2
// set 0 = Rock, 1 = Paper, 2 = Scissors
// print computer pick
// print user pick
function pickRps () {
    rpsResult = Math.floor(Math.random() * 3)
    if (rpsResult === 0) {
        computerPick = 'Rock';
    } else if (rpsResult === 1) {
        computerPick = 'Paper';
    } else {
        computerPick = 'Scissors'
    }
    document.getElementById('result').innerHTML = computerPick
    document.getElementById('pick').innerHTML = userPick
}


// decide winner
// track and print score
function decideWinner () {
    if (userPick === computerPick) {
        document.getElementById('winner').innerHTML = 'Tie';
        tieScore += 1;
        document.getElementById('tieScore').innerHTML = tieScore;
    }
    if (userPick === 'Rock') {
        if (computerPick === 'Paper') {
            document.getElementById('winner').innerHTML = 'You lose';
            computerScore += 1;
            document.getElementById('compScore').innerHTML = computerScore;
        }
        if (computerPick === 'Scissors') {
            document.getElementById('winner').innerHTML = 'You win!';
            playerScore += 1;
            document.getElementById('playerScore').innerHTML = playerScore;
        }
    }
    if (userPick === 'Paper') {
        if (computerPick === 'Rock') {
            document.getElementById('winner').innerHTML = 'You win!';
            playerScore += 1;
            document.getElementById('playerScore').innerHTML = playerScore;
        }
        if (computerPick === 'Scissors') {
            document.getElementById('winner').innerHTML = 'You lose';
            computerScore += 1;
            document.getElementById('compScore').innerHTML = computerScore;
        }
    }
    if (userPick === 'Scissors') {
        if (computerPick === 'Rock') {
            document.getElementById('winner').innerHTML = 'You lose';
            computerScore += 1;
            document.getElementById('compScore').innerHTML = computerScore;
        }
        if (computerPick === 'Paper') {
            document.getElementById('winner').innerHTML = 'You win!';
            playerScore += 1;
            document.getElementById('playerScore').innerHTML = playerScore;
        }
    }
}
