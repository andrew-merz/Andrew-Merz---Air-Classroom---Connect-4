const spaces = document.querySelectorAll(".game-board div");
const button1 = document.querySelector(".btn1");
const column1 = spaces[(0, 7, 21, 28, 35)];

let currentPlayer = 1;

for (let i = 0; i < spaces.length; i++) {
  spaces[i].onclick = () => {
    if (currentPlayer == 1) {
      spaces[i].classList.add("player1");
      currentPlayer = 2;
    } else if (currentPlayer == 2) {
      spaces[i].classList.add("player2");
      currentPlayer = 1;
    }
  };
}
