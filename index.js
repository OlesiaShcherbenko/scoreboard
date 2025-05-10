// Home
let homeScoreEL = document.getElementById("home-score");
let homeScore = 0;

function add1Home() {
  homeScore += 1;
  homeScoreEL.textContent = homeScore;
}

function add2Home() {
  homeScore += 2;
  homeScoreEL.textContent = homeScore;
}

function add3Home() {
  homeScore += 3;
  homeScoreEL.textContent = homeScore;
}

// Guest
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function add1Guest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function add2Guest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function add3Guest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
