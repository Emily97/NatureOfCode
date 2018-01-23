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

	this.step = function(){
		var probArray = [];
		probArray[1] = 1;			//In this instance r(our random number) has 40% of being a 1 or a 3 and 20% chance of being a 2
		probArray[2] = 1;
		probArray[3] = 2;
		probArray[4] = 3;
		probArray[5] = 3;

		var index = floor(random(probArray.length));
		var r = probArray[index];

		this.x = constrain(this.x,0,width - 1);
		this.y = constrain(this.y,0,height - 1);

	}
}