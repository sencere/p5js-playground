var attractors = [];
var particles = [];

function setup() {
  createCanvas(800, 600);
  print(coordinates);
}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(220);
  fill(65);
  noStroke(); 
  ellipse(300, 300, 400, 400);
  stroke(255);
  strokeWeight(4);
  particles.push(new Firefly(random(width), random(height)));

  if (particles.length > 100) {
    particles.splice(0, 1);
  }

  for (var i = 0; i < attractors.length; i++) {
    stroke(0, 255, 0);
    point(attractors[i].x, attractors[i].y);
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }
}
