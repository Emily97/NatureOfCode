//sketch.js
var mover;
var liquid;

function setup() {
  createCanvas(600,600);

  mover = new Mover(200, 200, 4, 2, 0.01, 0.02, 5);
  liquid = new Liquid(200, height/2, 200, 200, 5, 0, 0, 255, 100);
}

function draw() {
  background(255);

  if(liquid.contains(mover)){
    console.log("mover is inside liquid");
  }

  liquid.display();
  mover.update();
  mover.display();
  mover.checkEdges();
  mover.applyForces();
}
