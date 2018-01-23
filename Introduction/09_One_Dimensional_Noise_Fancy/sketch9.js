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
	this.position = createVector(width/2, height/2);
	this.noff = createVector(random(1000), random(1000));

	this.render = function () {
		
	}
}