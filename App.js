let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let count = 0;
let score = 0;
function homeAdd1() {
  count += 1;
  homeCount.innerText = count;
}
function homeAdd2() {
  count += 2;
  homeCount.innerText = count;
}
function homeAdd3() {
  count += 3;
  homeCount.innerText = count;
}
function guestAdd1() {
  score += 1;
  guestCount.innerText = score;
}
function guestAdd2() {
  score += 2;
  guestCount.innerText = score;
}
function guestAdd3() {
  score += 3;
  guestCount.innerText = score;
}
