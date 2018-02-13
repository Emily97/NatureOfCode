var movers = [];

function setup() {
	createCanvas(600,600);
	for (var i = 0; i < 20; i++)
	{
		movers[i] = new Mover();
	}
}

function draw() {
	background(151);

	for(var i = 0; i < 20; i++)
	{
		movers[i].render();
		movers[i].update();
		movers[i].checkEdges();
	}
}

function Mover() {

	this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
	this.velocity = createVector(3, 6);
	this.acceleration = createVector(0.2, 0.5);

	this.render = function() {
		ellipse(this.location.x,this.location.y, 30, 30);
	}

	this.update = function() {
		this.location.add(this.velocity);
		this.velocity.add(this.acceleration);
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}
}