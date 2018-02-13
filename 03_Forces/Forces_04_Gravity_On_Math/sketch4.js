var mover = [];

function setup() {
	createCanvas(640, 640);
	for (var i = 0; i < 20; i++) {
		mover[i] = new Mover(Math.floor(random(5, 20)));
	}
}

function draw() {
	background(51);

	for (var i = 0; i < 20; i++) {
		var m = mover[i].mass;

		var wind = createVector(0.1, 0.0);
		var gravity = createVector(0, 0.1 * m);

		mover[i].applyForce(wind);
		mover[i].applyForce(gravity);

		mover[i].display();
		mover[i].update();
		mover[i].checkEdges();
	}
}