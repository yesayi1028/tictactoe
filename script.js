let player = 'X'
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

const grids = document.querySelectorAll(".grid");

grids.forEach(function(grid) {
  grid.addEventListener("click", function() {
    this.innerHTML = player;

    winner();
    
    player === 'X' ? player = 'O' : player = 'X';
  
  });
});

function winner(grid) {
  gridValues = [];
  grids.forEach(function(grid) {
    gridValues.push(grid.innerHTML);
  });
  
  line();
}

///////////

let button = document.getElementById('myButton');

button.addEventListener('click', line);

function line() {
  
  for (let i = 1; i <= Object.keys(lines).length; i++){
    let lineWin = [];
    for (let i2 = 0; i2 < lines[i].length; i2++) {
      console.log(lines[i][i2]);
      console.log(gridValues[lines[i][i2]]);
      

      if(gridValues[lines[i][i2]] === player) {
        lineWin.push(true);
      } else {
        lineWin.push(false);
      }
      console.log(lineWin);
      console.log('loop 2 end');
    }
    console.log('loop 1 end');
    
    if(lineWin[0] && lineWin[1] && lineWin[2]) {
      alert(`player ${player} win`);
      afterWin();
    }
  }
}

function afterWin() {
  grids.forEach(function(grid) {
    grid.innerHTML = "";
  });
}