let boardDisplay = "123\n456\n789 ";
let boardArray = [
  [null, null, "X"],
  [null, null, null],
  [null, null, null],
];

function defineInput(userInput) {
  switch (userInput) {
    case 1:
      userInput = boardArray[0][0];
      break;
    case 2:
      userInput = boardArray[0][1];
      break;
    case 3:
      userInput = boardArray[0][2];
      break;

    case 4:
      userInput = boardArray[1][0];
      break;
    case 5:
      userInput = boardArray[1][1];
      break;
    case 6:
      userInput = boardArray[1][2];
      break;
    case 7:
      userInput = boardArray[2][0];
      break;
    case 8:
      userInput = boardArray[2][1];
      break;
    case 9:
      userInput = boardArray[2][2];
      break;
  }
  return userInput;
}

//define moves as a position in board array

function getUserInput() {
  let userInput = Number(prompt("Please make a move"));
  console.log(typeof userInput);

  if (userInput !== "number") {
    alert("Invalid");
    getUserInput();
  }
  userInput = defineInput(userInput);
  console.log(userInput);

  //check is hmove valid
  //is empty square
  //return input
}

//check if game over
//check if currentPlayer won
//check if board is full
//otherwise update board
// swith current player
// return to get user input

function updateBoard() {}

//check is move valid

function tictactoe() {
  //decide whos turn it is
  //get user input
}

function updateBoard(currentPlayer, event) {
  $(event.currentTarget).innerHTML = currentPlayer;
}

let currentPlayer = "Y";
$(".box").on("click", (event) => {
  if (currentPlayer === "X") {
    const x = document.createElement("span");
    x.innerHTML = "X";
    x.classList.add("player-symbol");

    event.currentTarget.append(x);
    currentPlayer = "Y";
  } else {
    const y = document.createElement("span");
    y.innerHTML = "Y";
    y.classList.add("player-symbol");
    event.currentTarget.append(y);
    currentPlayer = "X";
  }
});
