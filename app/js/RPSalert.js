function playToFive() {
  alert('Let\'s play Rock Paper Scissors');
  var rep = prompt("Play until someone wins how many times?");
  var playerWins = 0;
  var computerWins = 0;
 
  while (computerWins<rep&&playerWins<rep) {
  var outcome = RPS();
   if (outcome === "computer"){
        computerWins++;
    } else if (outcome === "player") {
        playerWins++;
    }
    alert('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }
  var winner;
  if (playerWins>computerWins){
    winner = "Player";
  } else {
    winner = "Computer";
  }
  alert('Game Over! The winner is '+ winner);
  return [playerWins, computerWins];
  }

function RPS(){
  var player =  getPlayerMove();
  var pc = getComputerMove();
  var winner= getWinner(player,pc);
  alert('Player chose ' + player + ' while Computer chose ' + pc);
  return winner;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove() {
    var pm = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return pm;
}

function getComputerMove() {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    switch (playerMove) {
        case "rock":
        if (computerMove==="rock"){
            winner = "tie";
        } else if(computerMove==="paper"){
            winner = "computer";
        } else{
            winner = "player";
        }
        break;
      case "scissors":
        if (computerMove==="rock"){
            winner = "computer";
        } else if(computerMove==="paper"){
            winner = "player";
        } else{
            winner = "tie";
        }
        break;
      case "paper":
        if (computerMove==="rock"){
            winner = "player";
        } else if(computerMove==="paper"){
            winner = "tie";
        } else{
            winner = "computer";
        }
        break;
    }
    return winner;
}



playToFive();
//noprotect