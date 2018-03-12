//sketch.js
var mover;

function setup() {
  createCanvas(600,600);

  mover = new Mover(200, 200, 4, 2, 0.01, 0.02, 5)
}

function draw() {
  background(255);

  mover.update();
  mover.display();
  mover.checkEdges();
  mover.applyForces();
}
