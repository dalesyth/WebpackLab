import { voteTakeout } from "./score.js";
import { getWinner } from "./score.js";
import { voteLeftovers } from "./score.js";
const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("leftovers");
const takeoutBtn = document.getElementById("takeout");

const updateWinner = () => {
  const currWinner = getWinner();
  winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
  voteTakeout();
  updateWinner();
});

leftoversBtn.addEventListener("click", () => {
  voteLeftovers();
  updateWinner();
});
