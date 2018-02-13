var mover = [];

function setup() {
	createCanvas(600, 600);
	for (var i = 0; i < 100; i++)
	{
		mover[i] = new Mover();
	}
}

function draw() {

	background('rgba(255,255,255,0.4)');

	for (var i = 0; i < mover.length; i++)
	{
		mover[i].render();
		mover[i].update();
		mover[i].display();
		mover[i].checkEdges();
	}
}

function Mover() {

	this.location = createVector(floor(random(width)), floor(random(height)));
	this.velocity = createVector(2, 4);
	this.acceleration = createVector();
	//this.location = createVector(100, 100); hardcoded
	this.render = function() {
		ellipse(this.location.x,this.location.y, 10, 10);
	}

	this.update = function() {
		var mouse = createVector(mouseX, mouseY);

		this.acceleration = p5.Vector.sub(mouse, this.location);
		this.acceleration.mult(2);
		this.acceleration.normalize();

		this.location.add(this.velocity);
		this.velocity.limit(10);
		this.velocity.add(this.acceleration);
	}

	this.display = function() {
		stroke(150);
		strokeWeight(1);
		fill(255, 0, 0, 50);
	}

	//stop the ball from going off screen
	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}
}