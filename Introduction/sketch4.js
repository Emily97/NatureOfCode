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