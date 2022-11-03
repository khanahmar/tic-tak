const boxes = Array.from(document.querySelectorAll(".box"));
const player1 = "0";
const player2 = "x";

let pl1 = false;
let pl2 = false;
const myArray = [];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target) {
      pl1 = true;
      box.innerHTML = player1;
    }
    if (pl1) {
      e.target.innerHTML = player2;
    }
  });
});
