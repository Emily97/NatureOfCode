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
	this.x = width / 2;
	this.y = height / 2;

	this.render = function () {
		stroke(0);
		point(this.x, this.y);
	};

	this.step = function() {

		var probArray = [];
		probArray[0] = 1;
		probArray[1] = -1;
		probArray[2] = 1;
		probArray[3] = -1;
		probArray[4] = -1;

		var indexX = floor(random(probArray.length));
		var indexY = floor(random(probArray.length));
		var rx = probArray[indexX];
		var ry = probArray[indexY];

		this.x += rx;
		this.y += ry;

		this.x = constrain(this.x,0,width - 1);
		this.y = constrain(this.y,0,height - 1);

	}
}
