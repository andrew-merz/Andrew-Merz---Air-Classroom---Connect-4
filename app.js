const spaces = document.querySelectorAll(".game-board");

for (let i = 0; i < spaces.length; i++) {
  spaces[i].onclick = () => {
    console.log("Click Works");
  };
}
