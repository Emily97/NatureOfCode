var walker;

function setup() {
	createCanvas(320, 640);
	background(127);
	walker = new Walker();
}

function draw() {
	walker.render();
	walker.step();
}

function Walker() {
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);			
	}

	this.step = function () {
		var stepx = floor(random(-1, 2));		//here we break the steps into x and y directions. We ask for a random 
		var stepy = floor(random(-1, 2));		//number between -1 and 2 and we then floor it. 1.9 will be floored to 1, 
												//0.9 will be floored to 0 and -0.2 will be floored to -1. This is one way to achieve 9 outcomes including not moving.

		this.x = this.x + stepx;
		this.y = this.y + stepy;

		this.x = constrain(this.x,0,width);
		this.y = constrain(this.y,0,height);
	}
}