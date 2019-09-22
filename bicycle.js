var vehicle;

function setup() {
  ca = createCanvas(windowWidth, windowHeight);
  ca.position(0, 0)
  ca.style("z-index: -1");
  vehicle = new bicycle();
}

function draw() {
  background(0);
  fill(255)
  textSize(16);
  textAlign(RIGHT);
  text("Use 'w' and 's' keys for Acceleration and Decceleration\n \nUse 'a' and 'd' keys for Steering", windowWidth - 40, 40)
  vehicle.getinput();
  vehicle.update();
  vehicle.disp();
}

class bicycle {
  constructor() {
    this.pos = createVector(80, 40);
    this.theta = 0;
    this.vel = 0;
    this.acc = 0;
    this.delta = 0;
    this.length = 250;
  }
  getinput() {
    if (keyIsDown(87)) {
      this.acc = 0.3;
    } else if (keyIsDown(83)) {
      this.acc = -0.3;
    } else {
      this.acc = 0;
    }
    if (keyIsDown(68)) {
      if (this.delta < 0.8) {
        this.delta += 0.02;
      }
    } else if (keyIsDown(65)) {
      if (this.delta > -0.8) {
        this.delta -= 0.02;
      }
    }
  }
  update() {
    this.vel += this.acc
    if (this.vel > 15 || this.vel < -15) {
      this.vel -= this.acc
    }
    this.pos.x += this.vel * cos(this.theta);
    this.pos.y += this.vel * sin(this.theta);
    this.theta += (this.vel * tan(this.delta)) / this.length;
    this.vel *= 0.95;
  }
  disp() {
    translate(this.pos.x, this.pos.y);
    rotate(this.theta);
    fill(255)
    rect(0, -10, this.length, 20)
    fill(255, 0, 0)
    rect(-50, -20, 100, 40)
    translate(this.length, 0);
    rotate(this.delta)
    rect(-50, -20, 100, 40)
  }
}