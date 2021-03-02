let userSymbol = "X";
let turnsTaken = 0;
let isGameComplete = false;

function performLogic(buttonId, tileId) {
  $(buttonId).hide();
  $(tileId).text(userSymbol);
  
  switchSymbols();
  incrementTurns();
  
  if (isGameComplete) {
    announceWinner();
  }
}

function switchSymbols() {
  if (userSymbol === "X") {
    userSymbol = "O";
  } else {
    userSymbol = "X";
  }
}

function isThreeInARow(tileId1, tileId2, tileId3) {
  return $(tileId1).text() === $(tileId2).text() === $(tileId3).text() === userSymbol;
}

function isVerticalWinner() {
  let columnOneIsWinner = isThreeInARow("#tile1", "#tile4", "#tile7");
  let columnTwoIsWinner = isThreeInARow("#tile2", "#tile5", "#tile8");
  let columnThreeIsWinner = isThreeInARow("#tile3", "#tile6", "#tile9");
  
  return columnOneIsWinner || columnTwoIsWinner || columnThreeIsWinner;
}

function isHorizontalWinner() {
  let rowOneIsWinner = isThreeInARow("#tile1", "#tile2", "#tile3");
  let rowTwoIsWinner = isThreeInARow("#tile4", "#tile5", "#tile6");
  let rowThreeIsWinner = isThreeInARow("#tile7", "#tile8", "#tile9");
  
  return rowOneIsWinner || rowTwoIsWinner || rowThreeIsWinner;
}

function isDiagonalWinner() {
  let diagonalOneIsWinner = isThreeInARow("#tile1", "#tile5", "#tile9");
  let diagonalTwoIsWinner = isThreeInARow("#tile7", "#tile5", "#tile3");
  
  return diagonalOneIsWinner || diagonalTwoIsWinner;
}

function announceWinner() {
  return;
}

function incrementTurns() {
  turnsTaken = turnsTaken + 1;
  
  if (turnsTaken === 9) {
    isGameComplete = true;
    $("h1").text("It's a draw!");
  }
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

