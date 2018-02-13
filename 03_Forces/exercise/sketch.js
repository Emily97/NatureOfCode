var mover = [];
var numberOfMovers = 10;

function setup() {
	createCanvas(600, 600);
	for(var i = 0; i < numberOfMovers; i++) {
		mover[i] = new Mover(Math.floor(random(10,40)));
	}
}

function draw() {
	background(51);

	

	for(var i = 0; i < numberOfMovers; i++) {

		var wind = createVector(0, 0);
		var gravity = createVector(0, 0 * mover[i].mass);

		var c = 0.5; //coefficient of friction
		var normal = 1;
		var frictionMag = c * normal;
		var friction = p5.Vector.mult(mover[i].velocity, -1);
		friction.normalize();
		friction.mult(frictionMag);

		mover[i].applyForce(friction);
		mover[i].applyForce(wind);
		mover[i].applyForce(gravity);

		mover[i].display();
		mover[i].update();
		mover[i].checkEdges();
	}
}