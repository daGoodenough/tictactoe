//declare variable that represent the spaces,
//the board and winning positions
let $box1;
let $box2;
let $box3;
let $box4;
let $box5;
let $box6;
let $box7;
let $box8;
let $box9;
let boardArray = [];
let winners = [];

//function to reset variables to new values
//every time a space is clicked;
function setBoxes() {
  $box1 = $("#box1").children().text();
  $box2 = $("#box2").text();
  $box3 = $("#box3").text();
  $box4 = $("#box4").text();
  $box5 = $("#box5").text();
  $box6 = $("#box6").text();
  $box7 = $("#box7").text();
  $box8 = $("#box8").text();
  $box9 = $("#box9").text();

  boardArray = [
    [$box1, $box2, $box3],
    [$box4, $box5, $box6],
    [$box7, $box8, $box9],
  ];

  //all winning combinations
  winners = [
    [boardArray[0][0], boardArray[0][1], boardArray[0][2]], //1st row
    [boardArray[1][0], boardArray[1][1], boardArray[1][2]], //2nd row
    [boardArray[2][0], boardArray[2][1], boardArray[2][2]], //3rd row
    [boardArray[0][0], boardArray[1][0], boardArray[2][0]], //1st column
    [boardArray[0][1], boardArray[1][1], boardArray[2][1]], //2nd column
    [boardArray[0][2], boardArray[1][2], boardArray[2][2]], //3rd column
    [boardArray[0][0], boardArray[1][1], boardArray[2][2]], //diagonal 1
    [boardArray[0][2], boardArray[1][1], boardArray[2][0]], //diagonal 2
  ];
}

//determines if there is a cats game or 3 in a row
function isGameOver(event) {
  setBoxes();

  //winner
  const won = winners.some((arr) => {
    //if one of the array in 'winners' has same symbols that symbol has won
    return arr.every((symbol) => {
      return symbol === currentPlayer;
    });
  });

  //display end game message
  if (won) {
    let endGame1 = $("<div class = 'end-game'></div>").text(
      `${currentPlayer} Won!`
    );
    let endGame2 = $("<div class = 'end-game'></div>").text("Play again?");
    $(".gameboard").hide();
    $(".current-player-message").hide();
    $(".end-game-container").append(endGame1, endGame2);
    $(".end-game-container").show();
    $(".reset").show();
    return;
  }
  //cats game
  let board = [...$(".box").children().text()]; //destructure jQuery object of '.player-symbol' into board array
  
  //if board array is full its a cats game
  if (board.length === 9) {
    let endGame1 = $("<div class = 'end-game'></div>").text("Cats Game!");
    let endGame2 = $("<div class = 'end-game'></div>").text(
      "There are no winners, please play again."
    );
    $(".gameboard").hide();
    $(".end-game-container").append(endGame1, endGame2);
    $(".end-game-container").show();
    $(".current-player-message").hide();


    $(".reset").show();
  }
}


//every time space is clicked this is called
//depending on current player it sets a new div element of class "player symbol"
// to the inner html of that box
function updateBoard(event) {
  if (currentPlayer === "X") {
    const x = document.createElement("div");
    x.innerHTML = "X";
    x.classList.add("player-symbol");
    event.currentTarget.append(x);
    isGameOver(event);
    currentPlayer = "O";
  } else {
    const o = document.createElement("div");
    o.innerHTML = "O";
    o.classList.add("player-symbol");
    event.currentTarget.append(o);
    isGameOver(event);
    currentPlayer = "X";
  }
}

//accepts an event
//determines whether or not space is already taken
function isMoveValid(event) {
  const $space = $(event.currentTarget);
  if ($space.text() === "") {
    return true;
  } else {
    return false;
  }
}

//if isMoveValid returns false, then change the
//background color to red while the mouse is clicked
//and back to original when unclicked
$(".box")
  .on("mousedown", (event) => {
    if (!isMoveValid(event)) {
      $(event.currentTarget).css("background-color", "red");
    }
  })
  .on("mouseup", (event) => {
    $(event.currentTarget).css("background-color", "");
  });

  function currentPlayerMessage() {
    $(".current-player-message").text(`${currentPlayer}'s turn.`)
  }

/*
1.check if move is valid
    -if invalid do nothing and exit the function
    -if valid continue
2. update board based on where clicked and current player
3. check if game is over
    -if over pop up winning(or draw) message and option to reset
    -if not over exit function
*/
function tictactoe() {
  
  $(".box").on("click", (event) => {
    if (!isMoveValid(event)) {
      return;
    }

    updateBoard(event);
    currentPlayerMessage();
  });
}

//start game
let currentPlayer = "X";
tictactoe();

const $reset = $(".reset");

//clear game board and start new game when reset button is clicked
$reset.on("click", () => {
  const $gameboard = $(".gameboard");
  const $endGame = $(".end-game-container");
  const $symbolDiv = $(".player-symbol");
  const $endGameContainer = $(".end-game-container");
  $reset.hide();
  $endGame.hide();
  $symbolDiv.remove();
  $gameboard.show();
  $endGameContainer.html("");
  $(".current-player-message").show().text("X goes first.");
  currentPlayer = "X";
  tictactoe();
});
