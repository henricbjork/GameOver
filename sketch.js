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
      console.log(score);
    }

    if (pipes[i].hits(bird)) {
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
  text(score, 200, 30);
  textSize(26);
}

function mouseClicked() {
  bird.up();
  if (isOver) reset();
}

function gameOver() {
  score -= 1; // The score still adds one point when hitting a pipe. This removes that faulty point.
  isOver = true;
  noLoop();
}

function reset() {
  isOver = false;
  score = 0;
  pipes = [];
  bird = new Bird();
  loop();
}
