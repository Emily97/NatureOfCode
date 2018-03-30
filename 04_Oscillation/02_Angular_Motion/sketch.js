var mover;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.002;

function setup() {
	createCanvas(640, 640);
	mover = new Mover(5);
}

function draw() {
	background(51);

  stroke(0);
  fill(127);

  push();
  translate(width/2, height/2);
  rotate(angle);
  line(-60,0,60,0);
  ellipse(60,0,16,16);
  ellipse(-60,0,16,16);
  pop();

  //Maths
  aVelocity = aVelocity + aAcceleration;
  // aVelocity = constrain(aVelocity, 0, 0.1);
  angle = angle + aVelocity;

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, .05);

	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.display();
	mover.update();
	mover.checkEdges();
}
