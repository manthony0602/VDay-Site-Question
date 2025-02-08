// script.js

// Function to what option they choose (hopefully yes)
function selectOption(option) {
  if (option === "yes") {
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question so it doesn't interfere with the next page
      displayBlackLove();
    });
  }
}

// Function to flash rainbow colors, then execute callback
function flashRainbowColors(callback) {
  let colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  let i = 0;
  let interval = setInterval(() => {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200);

  setTimeout(() => {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; // Reset background
    if (callback) callback();
  }, 2000);
}

// Function to display initial black cupid gif
function displayCupid() {
  let imageContainer = document.getElementById("image-container");
  let cupidImg = new Image();
  cupidImg.src = "Cupid.gif";
  cupidImg.alt = "Cupid";
  cupidImg.onload = () => imageContainer.appendChild(cupidImg);
}

// Function to display blackLove.gif when they HOPEFULLY click "Yes"
function displayBlackLove() {
  let imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Clear previous image

  let blackLove = new Image();
  blackLove.src = "BlackLove.gif";
  blackLove.alt = "Black Love Image";
  blackLove.onload = () => {
    imageContainer.appendChild(blackLove);
    document.getElementById("options").style.display = "none"; // Hide buttons after they make a decision
  };
}

// Function to move "No" button when they try to hover it and click it
document.getElementById("no-button").addEventListener("mouseover", function () {
  let noButton = this;
  noButton.style.position = "absolute";
  noButton.style.left =
    Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";
  noButton.style.top =
    Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
});

// Display the black cupid gif initially
displayCupid();
