const spaces = document.querySelectorAll(".game-board div");
const highlight1 = document.querySelector(".highlight1");
const displayPlayer = document.querySelector(".player");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6");
const button7 = document.querySelector(".btn7");
const column1 = [
  spaces[0],
  spaces[7],
  spaces[14],
  spaces[21],
  spaces[28],
  spaces[35],
];
const column2 = [
  spaces[1],
  spaces[8],
  spaces[15],
  spaces[22],
  spaces[29],
  spaces[36],
];
const column3 = [
  spaces[2],
  spaces[9],
  spaces[16],
  spaces[23],
  spaces[30],
  spaces[37],
];
const column4 = [
  spaces[3],
  spaces[10],
  spaces[17],
  spaces[24],
  spaces[31],
  spaces[38],
];
const column5 = [
  spaces[4],
  spaces[11],
  spaces[18],
  spaces[25],
  spaces[32],
  spaces[39],
];
const column6 = [
  spaces[5],
  spaces[12],
  spaces[19],
  spaces[26],
  spaces[33],
  spaces[40],
];
const column7 = [
  spaces[6],
  spaces[13],
  spaces[20],
  spaces[27],
  spaces[34],
  spaces[41],
];
const winningCombos = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];

let currentPlayer = 1;
let activeGame = true;

// Based on the tic tac toe winning conditins, for every space in the winning array , the function will check if there is a winning combination
function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const space1 = spaces[winningCombos[i][0]];
    const space2 = spaces[winningCombos[i][1]];
    const space3 = spaces[winningCombos[i][2]];
    const space4 = spaces[winningCombos[i][3]];

    if (
      space1.classList.contains("player1") &&
      space2.classList.contains("player1") &&
      space3.classList.contains("player1") &&
      space4.classList.contains("player1")
    ) {
      activeGame = false;
      displayPlayer.innerHTML = "<h3>Game Over: Player 1 Wins!!!</h3>";
    }
    if (
      space1.classList.contains("player2") &&
      space2.classList.contains("player2") &&
      space3.classList.contains("player2") &&
      space4.classList.contains("player2")
    ) {
      activeGame = false;
      displayPlayer.innerHTML = "<h3>Game Over: Player 2 Wins!!!</h3>";
    }
  }
}

//Button Functions
button1.addEventListener("click", () => {
  for (let i = column1.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column1[i].classList.contains("taken")) {
        column1[i].classList.add("player1");
        column1[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    }
    if (currentPlayer == 2 && activeGame == true) {
      if (!column1[i].classList.contains("taken")) {
        column1[i].classList.add("player2");
        column1[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3>Current Player: Player 1</h3>";
        checkWin();
        break;
      }
    }
  }
});
button2.addEventListener("click", () => {
  for (i = column2.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column2[i].classList.contains("taken")) {
        column2[i].classList.add("player1");
        column2[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column2[i].classList.contains("taken")) {
        column2[i].classList.add("player2");
        column2[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
button3.addEventListener("click", () => {
  for (i = column3.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column3[i].classList.contains("taken")) {
        column3[i].classList.add("player1");
        column3[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column3[i].classList.contains("taken")) {
        column3[i].classList.add("player2");
        column3[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
button4.addEventListener("click", () => {
  for (i = column4.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column4[i].classList.contains("taken")) {
        column4[i].classList.add("player1");
        column4[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column4[i].classList.contains("taken")) {
        column4[i].classList.add("player2");
        column4[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
button5.addEventListener("click", () => {
  for (i = column5.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column5[i].classList.contains("taken")) {
        column5[i].classList.add("player1");
        column5[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column5[i].classList.contains("taken")) {
        column5[i].classList.add("player2");
        column5[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
button6.addEventListener("click", () => {
  for (i = column6.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column6[i].classList.contains("taken")) {
        column6[i].classList.add("player1");
        column6[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column6[i].classList.contains("taken")) {
        column6[i].classList.add("player2");
        column6[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
button7.addEventListener("click", () => {
  for (i = column7.length - 1; i >= 0; i--) {
    if (currentPlayer == 1 && activeGame == true) {
      if (!column7[i].classList.contains("taken")) {
        column7[i].classList.add("player1");
        column7[i].classList.add("taken");
        currentPlayer = 2;
        displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
        checkWin();
        break;
      }
    } else if (currentPlayer == 2 && activeGame == true) {
      if (!column7[i].classList.contains("taken")) {
        column7[i].classList.add("player2");
        column7[i].classList.add("taken");
        currentPlayer = 1;
        displayPlayer.innerHTML = "<h3> Current Player: Player 1";
        checkWin();
        break;
      }
    }
  }
});
// Mouse over functions
// Mouse1
// function mouse1() {
//   button1.addEventListener("mouseover", () => {
//     if (currentPlayer == 1 && activeGame == true) {
//       highlight1.classList.add("player1highlight");
//       button1.addEventListener("mouseout", () => {
//         highlight1.classList.remove("player1highlight");
//       });
//     }
//   });
//   if (currentPlayer == 2 && activeGame == true) {
//     button1.addEventListener("mouseover", () => {
//       highlight1.classList.add("player2highlight");
//       button1.addEventListener("mouseout", () => {
//         highlight1.classList.remove("player2highlight");
//       });
//     });
//   }
// }
// mouse1();

//Below is the function that works for clicking on the individual spaces
// for (let i = 0; i < spaces.length; i++) {
//   spaces[i].onclick = () => {
//     //if the square below your current square is taken, you can go ontop of it
//     if (
//       spaces[i + 7].classList.contains("taken") &&
//       !spaces[i].classList.contains("taken") &&
//       activeGame == true
//     ) {
//       if (currentPlayer == 1) {
//         console.log("player one works");
//         spaces[i].classList.add("taken");
//         spaces[i].classList.add("player1");
//         currentPlayer = 2;
//         displayPlayer.innerHTML = "<h3>Current Player: Player 2</h3>";
//       } else if (currentPlayer == 2) {
//         console.log("player two works");
//         spaces[i].classList.add("taken");
//         spaces[i].classList.add("player2");
//         currentPlayer = 1;
//         displayPlayer.innerHTML = "<h3>Current Player: Player 1</h3>";
//       }
//     } else displayPlayer.innerHTML = "<h3>Cant Go there</h3>";
//     checkWin();
//   };
// }
