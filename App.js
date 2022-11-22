let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let periodCount = document.getElementById("period-count");
let leader = document.getElementById("leader");
let count = 0;
let score = 0;
let period = 0;
function homeAdd1() {
  count += 1;
  homeCount.innerText = count;
  showleader();
}
function homeAdd2() {
  count += 2;
  homeCount.innerText = count;
  showleader();
}
function homeAdd3() {
  count += 3;
  homeCount.innerText = count;
  showleader();
}
function guestAdd1() {
  score += 1;
  guestCount.innerText = score;
  showleader();
}
function guestAdd2() {
  score += 2;
  guestCount.innerText = score;
  showleader();
}
function guestAdd3() {
  score += 3;
  guestCount.innerText = score;
  showleader();
}
function periodNumber() {
  if (period < 4) {
    period += 1;
    periodCount.innerText = period;
  }
  showleader();
}
function newGame() {
  score = 0;
  count = 0;
  period = 0;
  homeCount.innerText = count;
  guestCount.innerText = score;
  periodCount.innerText = score;
  showleader();
}
function showleader() {
  if (count < score) {
    document.getElementById("leaderLeft").style.color = "#rgb(86, 85, 85)";
    document.getElementById("leaderRight").style.color = "orange";
    document.getElementById("guest").style.color = "orange";
    document.getElementById("home").style.color = "white";
  } else if (count > score) {
    document.getElementById("leaderLeft").style.color = "orange";
    document.getElementById("leaderRight").style.color = "rgb(86, 85, 85)";
    document.getElementById("guest").style.color = "white";
    document.getElementById("home").style.color = "orange";
  } else {
    document.getElementById("leaderLeft").style.color = "rgb(86, 85, 85)";
    document.getElementById("leaderRight").style.color = "rgb(86, 85, 85)";
    document.getElementById("guest").style.color = "white";
    document.getElementById("home").style.color = "white";
  }
}
