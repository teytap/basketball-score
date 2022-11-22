let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let leader = document.getElementById("leader");
let leaderTeam = "";
let count = 0;
let score = 0;
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
function newGame() {
  score = 0;
  count = 0;
  homeCount.innerText = count;
  guestCount.innerText = score;
}
function showleader() {
  if (count < score) {
    leaderTeam = "LEADER >>";
  } else if (count > score) {
    leaderTeam = "<< LEADER";
  } else {
    leaderTeam = "";
  }

  return (leader.innerText = leaderTeam);
}
console.log(count);
console.log(homeCount);
