class Pipe {
  constructor() {
    this.spacing = 155;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = this.top + this.spacing;

    this.x = width;
    this.w = 60;
    this.speed = 2;

    this.passed = false;
  }

  hits(bird) {
    let halfBirdHeight = bird.height / 2;
    let halfBirdWidth = bird.width / 2;
    if (bird.y - halfBirdHeight < this.top || bird.y + halfBirdHeight > this.bottom) {
      if (bird.x + halfBirdWidth > this.x && bird.x - halfBirdWidth < this.x + this.w) {
        this.passed = true;
        return true;
      }
    }

    return false;
  }

  pass(bird) {
    if (bird.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }

  drawHalf() {
    let howManyNeeded = 0;
    let peakRatio = pipePeakSprite.height / pipePeakSprite.width;
    let bodyRatio = pipeBodySprite.height / pipeBodySprite.width;
    //this calculates how many pipe we can fit without stretching
    howManyNeeded = Math.round(height / (this.w * bodyRatio));
    for (let i = 0; i < howManyNeeded; i++) {
      let offset = this.w * (i * bodyRatio + peakRatio);
      image(pipeBodySprite, -this.w / 2, offset, this.w, this.w * bodyRatio)
    }
    image(pipePeakSprite, -this.w / 2, 0, this.w, this.w * peakRatio);
  }

  show() {
    push(); 
    translate(this.x + this.w / 2, this.bottom);
    this.drawHalf();
    translate(0, -this.spacing);
    rotate(PI);
    this.drawHalf();
    pop(); // Restore original state
  }

  update() {
    this.x -= this.speed;
  }

  offScreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
