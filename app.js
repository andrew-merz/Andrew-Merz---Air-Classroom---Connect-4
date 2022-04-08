const spaces = document.querySelectorAll(".game-board div");
const button1 = document.querySelector(".btn1");
const column1 = spaces[(0, 7, 14, 21, 28, 35)];
const column2 = spaces[(1, 8, 25, 22, 29, 36)];
const buttons = document.querySelectorAll(".buttons div");
let currentPlayer = 1;

// for (let i = 0; i < spaces.length; i++) {
//   spaces[i].onclick = () => {
//     if (currentPlayer == 1) {
//       spaces[i].classList.add("player1");
//       currentPlayer = 2;
//     } else if (currentPlayer == 2) {
//       spaces[i].classList.add("player2");
//       currentPlayer = 1;
//     }
//   };
// }

const columns = {
  column1: spaces[(0, 7, 14, 21, 28, 35)],
  column2: spaces[(1, 8, 25, 22, 29, 36)],
};

for (let i = 0; i < spaces.length; i++) {
  button1.onclick = () => {
    if (currentPlayer == 1) {
      console.log("Works");
      columns.column1.classList.add("player1");
      currentPlayer = 2;
    } else if (currentPlayer == 2) {
      spaces[i].classList.add("player2");
      currentPlayer = 1;
    }
  };
}
