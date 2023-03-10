
let player1 = 'X';
let player2 = 'O';
let player = player1;
let gridValues = [];
let lines = {
  1: [0,1,2],
  2: [3,4,5],
  3: [6,7,8],
  4: [0,3,6],
  5: [1,4,7],
  6: [2,5,8],
  7: [0,4,8],
  8: [2,4,6]
};
let player1Score = 0;
let player2Score = 0;
let tieScore = 0;
let player1Name = 'Player 1';
let player2Name = 'Player 2'



const grids = document.querySelectorAll(".grid");

grids.forEach(function(grid) {
  grid.addEventListener("click", function() {
    if(this.innerHTML === ''){
      this.innerHTML = player;

      winner();
      
      changePlayer();
    }
  });
});

function winner() {
  gridValues = [];
  grids.forEach(function(grid) {
    gridValues.push(grid.innerHTML);
  });
  
  line();
}

function line() {
  let winn = 0;
  for (let i = 1; i <= Object.keys(lines).length; i++){
    let lineWin = [];
    for (let i2 = 0; i2 < lines[i].length; i2++) {
      
      if(gridValues[lines[i][i2]] === player) {
        lineWin.push(true);
      } else {
        lineWin.push(false);
      }
    }
    
    if(lineWin[0] && lineWin[1] && lineWin[2]) {
      // alert(`player ${player} win`);
      deleteBoard();

      player === player1 ? player1Score++ : player2Score++;
      updateScore();
      winn++;
    }       
  }

  if(!gridValues.includes("") && !winn ) { 
    tieScore++;
    checkTie(); 
  }
} 

function deleteBoard() {
  grids.forEach((grid) => {
    grid.innerHTML = "";
  });
}

const player1Div = document.querySelector('#player1 div');
const player2Div = document.querySelector('#player2 div');
const tieDiv = document.querySelector('#tie div');

function updateScore() {
  player1Div.innerHTML = player1Score;
  player2Div.innerHTML = player2Score;
  tieDiv.innerHTML = tieScore;
}

function deleteScore() {
  player1Score = 0;
  player2Score = 0;
  tieScore = 0;
}

function newGame() {
  deleteScore();
  updateScore();
  deleteBoard(); 
  player = player1;
}

function checkTie() {
  deleteBoard();
  updateScore();
  player = player1;
}

function changePlayer() {
  player === player1 ? player = player2 : player = player1;
}

const player1Text = document.querySelector('#player1 p');
const player2Text = document.querySelector('#player2 p');

function checkboxChanged() {
  const switchCheckBox = document.getElementById('switchCheckBox');
  if (switchCheckBox.checked) {
    player1Name = 'Player';
    player2Name = 'Computer';
  } else {
    player1Name = 'Player 1';
    player2Name = 'Player 2';
  }
  player1Text.innerHTML = player1Name;
  player2Text.innerHTML = player2Name;
}



