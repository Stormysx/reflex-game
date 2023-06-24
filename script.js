const container = document.getElementById("container");
const ball = document.getElementById("ball");
const score = document.getElementById("score");
const playAgainBtn = document.getElementById("play-again");
let startTime, endTime;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function evaluateScore(timeDifference) {
  let evaluation = "";

  if (timeDifference >= 20 && timeDifference <= 10000) {
    evaluation = "B*K Gibi";
  } else if (timeDifference >= 10 && timeDifference <= 20) {
    evaluation = "Acınası";
  } else if (timeDifference >= 5 && timeDifference <= 9) {
    evaluation = "Güzel";
  } else if (timeDifference >= 3 && timeDifference <= 5) {
    evaluation = "Çok Güzel";
  } else if (timeDifference >= 1 && timeDifference <= 3) {
    evaluation = "Efsane";
  } else if (timeDifference >= 0.7 && timeDifference <= 1) {
    evaluation = "Yetenekli";
  } else if (timeDifference >= 0.5 && timeDifference <= 0.7) {
    evaluation = "Çok Yetenekli";
  } else if (timeDifference >= 0.3 && timeDifference <= 0.5) {
    evaluation = "Profesör";
  } else if (timeDifference >= 0.1 && timeDifference <= 0.3) {
    evaluation = "HIZ USTASI";
  }

  return evaluation;
}

function endGame() {
  if (ball.classList.contains("clickable")) {
    endTime = Date.now();
    const timeDifference = (endTime - startTime) / 1000;
    const evaluation = evaluateScore(timeDifference);
    score.innerHTML = `Tıklama süresi: ${timeDifference.toFixed(
      2
    )} saniye.<br>Değerlendirme: ${evaluation}`;
    playAgainBtn.hidden = false;

    ball.classList.remove("clickable");
    ball.removeEventListener("click", endGame);
    animatePlayAgainButton();
  }
}

function playAgain() {
  score.innerHTML = "Bekleniyor...";
  playAgainBtn.hidden = true;
  startGame();
  ball.classList.add("clickable");
  ball.addEventListener("click", endGame);
}

function startGame() {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const ballSize = ball.offsetWidth;
  const maxX = containerWidth - ballSize;
  const maxY = containerHeight - ballSize;

  const randomX = getRandomPosition(maxX);
  const randomY = getRandomPosition(maxY);
  const randomColor = getRandomColor();

  ball.style.transform = `translate(${randomX}px, ${randomY}px)`;
  ball.style.backgroundColor = randomColor;

  startTime = Date.now();
  playAgainBtn.hidden = true;
  ball.classList.add("clickable");
  ball.addEventListener("click", endGame);
}

playAgainBtn.addEventListener("click", playAgain);

function animatePlayAgainButton() {
  playAgainBtn.classList.add("animate");
  setTimeout(() => {
    playAgainBtn.classList.remove("animate");
  }, 1000);
}

startGame();

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (!playAgainBtn.hidden) {
      playAgain();
    }
  }
});
