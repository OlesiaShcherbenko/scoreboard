console.log("JS loaded");

// Home
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

document.getElementById("add1HomeBtn").addEventListener("click", function () {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
});

document.getElementById("add2HomeBtn").addEventListener("click", function () {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
});

document.getElementById("add3HomeBtn").addEventListener("click", function () {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
});

// Guest
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

document.getElementById("add1GuestBtn").addEventListener("click", function () {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
});

document.getElementById("add2GuestBtn").addEventListener("click", function () {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
});

document.getElementById("add3GuestBtn").addEventListener("click", function () {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
});
