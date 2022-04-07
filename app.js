const spaces = document.querySelectorAll(".game-board");
const button1 = document.querySelector(".btn1");
let currentPlayer = 1;
for (let i = 0; i < spaces.length; i++) {
  spaces[i].onclick = () => {
    //console.log("Click Works");
    // spaces[i + 7] because it needs to check if the div below it is taken
    if (currentPlayer == 1) {
      spaces[i].classList.add("player1");
    }
  };
}
