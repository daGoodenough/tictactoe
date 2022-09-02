//accepts an event and add an X or an O 
//depending on who's turn it is

function updateBoard(event) {
    if (currentPlayer === "X") {
        const x = document.createElement("div");
        x.innerHTML = "X";
        x.classList.add("player-symbol");
        event.currentTarget.append(x);
        currentPlayer = "O";
        this[this.event.target.id] = this.event.target.innerText;//assign player symbol to variable of name = to id of the target element


      } else {
        const o = document.createElement("div");
        o.innerHTML = "O";
        o.classList.add("player-symbol");
        event.currentTarget.append(o);
        currentPlayer = "X";
        this[this.event.target.id] = this.event.target.innerText; //assign player symbol to variable of name = to id of the target element

      }
}

//accepts an event
//determines whether or not space is already taken
function isMoveValid(event) {
  const $space = $(event.currentTarget);
  if ($space.text() === '') {
    return true;
  } else {
    return false;
  }
}

// //highlights background if move is invalid, 
// //but can't get it to work as a function
// function invalidMove(event) {
//   console.log('I ran')
//     $(event.currentTarget).on('click', () => {
//       $(event.currentTarget).css("background-color", "red")
//     }).on('mouseup', () => {
//       $(event.currentTarget).css("background-color", "")
//     })
//     console.log('I ran again')
//   return;
// }

//if isMoveValid returns false, then change the
//background color to red while the mouse is clicked
$(".box").on("mousedown", (event) => {
  if(!isMoveValid(event)){
  $(event.currentTarget).css("background-color", "red");
  }
}).on('mouseup', (event) => {
  $(event.currentTarget).css("background-color", "")
})

//represent positions in an array

//create variable for each box
let $box1 = $('.box1').text();
let $box2 = $('.box2').text();
let $box3 = $('.box3').text();
let $box4 = $('.box4').text();
let $box5 = $('.box5').text();
let $box6 = $('.box6').text();
let $box7 = $('.box7').text();
let $box8 = $('.box8').text();
let $box9 = $('.box9').text();


let boardArray = 
[
  [$box1, $box2, $box3],
  [$box4, $box5, $box6],
  [$box7, $box8, $box9]
];

let winners =
[
  [boardArray[0][0], boardArray[0][1], boardArray[0][2]], //1st row
  [boardArray[1][0], boardArray[1][1], boardArray[1][2]], //2nd row
  [boardArray[2][0], boardArray[2][1], boardArray[2][2]], //3rd row
  [boardArray[0][0], boardArray[1][0], boardArray[2][0]], //1st column
  [boardArray[0][1], boardArray[1][1], boardArray[2][1]], //2nd column
  [boardArray[0][2], boardArray[1][2], boardArray[2][2]], //3rd column
  [boardArray[0][0], boardArray[1][1], boardArray[2][2]], //diagonal 1
  [boardArray[0][2], boardArray[1][1], boardArray[2][0]] //diagonal 2

];

console.log(winners)


let currentPlayer = "O";

/*
1.check if move is valid
    -if invalid do nothing and exit the function
    -if valid continue
2. update board based on where clicked and current player
3. check if game is over
    -if over pop up winning(or draw) message and option to reset
    -if not over exit function
*/
$(".box").on("click", (event) => {
  if(!isMoveValid(event)) {
    //invalidMove(event);
    return;
  }
  updateBoard(event);
});
