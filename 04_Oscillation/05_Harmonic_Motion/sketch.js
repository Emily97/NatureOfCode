var period = 120;
var amplitude = 100;
var x;

function setup() {
	createCanvas(640,360);
}

function draw(){
	background(255);
	x = amplitude * cos(TWO_PI * frameCount / period);
	stroke(0);
	fill(175);
	translate(width/2,height/2);
	line(0,0,x,0);
	ellipse(x,0,20,20);
}
