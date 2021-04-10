let movers = [];

function setup() {
  createCanvas(400, 400);
  reset();
  print(movers);
}

function draw() {
  background(127);
  
  for (let i = 0; i < movers.length; i++) {
    // Gravity is scaled by mass here!
    let gravity = createVector(random(-0.01,0.01), random(-0.01,0.01));
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}

function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

function reset() {
  for (let i = 0; i < 150; i++) {
    movers[i] = new Mover(0.5, random(0, 400), random(0, 400));
  }
}


// Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(155,200, 300);
  ellipse(this.position.x, this.position.y, this.mass * 20, this.mass * 20);
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass * 8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (height - this.mass * 8);
  }
};
