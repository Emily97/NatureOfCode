var walkers;
var noOfWalkers;

function setup() {
	createCanvas(1200,1000);
	noOfWalkers = 10;
	walkers = [];
	for (i = 0; i < noOfWalkers; i++) {
		walkers[i] = new Walker();
	}
	background(127);
}

function draw() {
	fill(0, 15);
	rect(0, 0, width, height);
	for(i = 0; i < noOfWalkers; i++) {
		walkers[i].step();
		walkers[i].render();
	}
}

function Walker() {
	this.position = createVector(width/2, height/2);		//vector = a way to store 2 values in a variable
	this.noff = createVector(random(1000), random(1000));

	this.render = function () {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.x), 0, 1, 20, 200))
	}

	this.step = function() {
		this.position.x = map(noise(this.noff.x), 0, 1, 0 -200, width + 200);
		this.position.y = map(noise(this.noff.y), 0, 1, 0 -200, height +200);
		this.noff.add(0.005,0.005);						//this is also to do with vectors
	}
}