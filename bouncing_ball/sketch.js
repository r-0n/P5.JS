class BouncingBall {
  constructor() {
    this.xPos = width / 2;
    this.yPos = random(100, 300);
    this.xSpeed = 4;
    this.ySpeed = 7;
  }

  move() {
    // move the ball
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }

  checkForCollisions() {
    // check first for left and right wall
    if (this.xPos <= 15 || this.xPos >= width - 15) {
      this.xSpeed = -this.xSpeed;
    }

    // do the same for the ceiling and the floor
    if (this.yPos <= 15 || this.yPos >= height - 15) {
      this.ySpeed = -this.ySpeed;
    }
  }

  draw() {
    circle(this.xPos, this.yPos, 30);
  }
}

let myBouncingBall;

function setup() {
  createCanvas(400, 400);
  myBouncingBall = new BouncingBall();
}

function draw() {
  background(240);
  myBouncingBall.move();
  myBouncingBall.checkForCollisions();
  myBouncingBall.draw();
}