let bird;
let cnv;
let pipes = [];
let score = 0;
let isOver = false;

function setup() {
  cnv = createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
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

function mouseClicked() {
  bird.up();
  if (isOver) reset();
}

function storeHighScore() {
  if (getItem('score') < score) {
    storeItem('score', score);
  }
}

function gameOver() {
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
