//sketch.js
var mover;
var liquid;

function setup() {
  createCanvas(600,600);

  mover = new Mover(200, 200, 0, 5, 0.0, 0.01, 5);
  liquid = new Liquid(0, height/2, 600, 300, 0.01, 0, 0, 255, 100);
}

function draw() {
  background(255);
  var m = mover.mass;
  var gravity = createVector(0, 0.05*m);

  if(liquid.contains(mover)){
    console.log("mover is inside liquid");
    //liquid.calculateDrag(mover);
    var dragForce = liquid.calculateDrag(mover);
    mover.applyForce(dragForce);
  }
  mover.applyForce(gravity);
  liquid.display();
  mover.update();
  mover.display();
  mover.checkEdges();
}
