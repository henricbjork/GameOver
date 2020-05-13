let bird;
let cnv;
let pipes = [];
let score = 0;
let isOver = false;
let mode; // determines if game has started
let birdSprite;
let gameOverImg;
let resetBtn;
let resetBtnY;
let resetBtnX;
let startBtn;
let startBtnY;
let startBtnX;
let button;

function preload() {
  birdSprite = loadImage('graphics/covid.png');
  gameOverImg = loadImage('graphics/gameover.png');
  resetBtn = loadImage('graphics/reset.png');
  startBtn = loadImage('graphics/start.png');
}

function setup() {
  mode = 0; //Initially game has not started
  cnv = createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  resetBtnY = height / 1.4;
  resetBtnX = width / 2;
  startBtnY = height / 2;
  startBtnX = width / 2;
}

function draw() {
  if (mode === 0) {
    background(0);
    imageMode(CENTER);
    image(startBtn, width / 2, height / 2, 200, 100);
    imageMode(CORNER);
  }

  if (mode === 1) {
    background(0);

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].pass(bird)) {
        score++;
      }

      if (pipes[i].hits(bird)) {
        score -= 1; // The score still adds one point when hitting a pipe. This removes that faulty point.
        gameOver();
      }

      if (pipes[i].offScreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
    }

    fill(255, 204, 0);
    textSize(26);
    text(score, 200, 30);
    textSize(16);
    fill(255, 204, 0);

    // this checks if there exists a highscore in the localstorage
    // so that it won't return null if there aren't any
    getItem('score')
      ? text(`High Score: ${getItem('score')}`, 280, 25)
      : text(`High Score: 0`, 280, 25);
  }
}

function mouseClicked() {
  bird.up();

  if (
    isStartButtonClick(
      mouseX,
      mouseY,
      startBtnX - 100,
      startBtnY - 50,
      200,
      100
    ) &&
    isOver === false
  ) {
    mode = 1;
  }

  if (
    isResetButtonClick(
      mouseX,
      mouseY,
      resetBtnX - 40,
      resetBtnY - 25,
      80,
      50
    ) &&
    isOver
  ) {
    reset();
  }
}

function storeHighScore() {
  if (getItem('score') < score) {
    storeItem('score', score);
  }
}

function gameOver() {
  displayGameOver();
  isOver = true;
  storeHighScore();
  noLoop();
}

function reset() {
  isOver = false;
  score = 0;
  pipes = [];
  bird = new Bird();
  loop();
}

function displayGameOver() {
  imageMode(CENTER);
  // button = createImg(resetBtn);
  image(gameOverImg, width / 2, height / 2);
  image(resetBtn, width / 2, height / 1.4, 80, 50);
  imageMode(CORNER); // This resets the image mode to default so that the sprite won't be centered
}

function isResetButtonClick(x, y, objectX, objectY, objectWidth, objectHeight) {
  return (
    x >= objectX &&
    x < objectX + objectWidth &&
    y >= objectY &&
    y < objectY + objectHeight
  );
}

function isStartButtonClick(x, y, objectX, objectY, objectWidth, objectHeight) {
  return (
    x >= objectX &&
    x < objectX + objectWidth &&
    y >= objectY &&
    y < objectY + objectHeight
  );
}
