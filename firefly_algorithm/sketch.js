let fireflyArray = [];
let fr = 30;
let interval = 5000;

let myVar = setInterval(myTimer, interval);

function myTimer() {
  this.fireflyArray = [];
  this.createFireflies(155);
}

function myStopFunction() {
  clearInterval(myVar);
}

function setup() {
  createCanvas(400, 400);
  this.createFireflies(155);
}

function draw() {
  background(220);
  frameRate(fr);

  for (let i = 0; i < fireflyArray.length; i++) {
    fireflyArray[i].display();
  }
}

function Firefly(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);
}

function createFireflies(amount = 10) {
  for (let i = 0; i < amount; i++) {
    fireflyArray[i] = new Firefly(0.5, random(0, 400), random(0, 400));
    fireflyArray[i].display();
  }
}

Firefly.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(155, 200, 300);
  ellipse(this.position.x, this.position.y, this.mass * 20, this.mass * 20);
};
