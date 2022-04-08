const spaces = document.querySelectorAll(".game-board div");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6");
const button7 = document.querySelector(".btn6");
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

console.log(column1);
console.log(column2);
console.log(column3);
console.log(column4);
console.log(column5);
console.log(column6);
console.log(column7);
let currentPlayer = 1;

const buttons = [button1, button2, button3, button4, button5, button6, button7];
// const columns = [column1, column2, column3, column4, column5, column6, column7];

// console.log(spaces.length);
// console.log(columns[0]);
// console.log(columns[1]);
// console.log(columns[4]);

// for (let i = 0; i < spaces.length; i++) {
//   spaces[i].onclick = () => {
//     if (currentPlayer == 1) {
//       //console.log("Works");
//       spaces[i].classList.add("player1");
//       currentPlayer = 2;
//     } else if (currentPlayer == 2) {
//       //console.log("player 2 works");
//       spaces[i].classList.add("player2");
//       currentPlayer = 1;
//     }
//   };
// }
for (let i = 0; i < spaces.length; i++) {
  buttons[0].onclick = () => {
    if (currentPlayer == 1) {
      console.log("Works");
      spaces[35].classList.add("player1");
      currentPlayer = 2;
    } else if (currentPlayer == 2) {
      console.log("also works");
      spaces[28].classList.add("player2");
      currentPlayer = 1;
    }
  };
}
