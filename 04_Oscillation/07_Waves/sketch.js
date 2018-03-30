var angle = 0;
var angleVel = 0.05;
var amplitude = 10;

function setup(){
	createCanvas(640,360);
	background(255);
}

function draw(){
	background(255);
	stroke(0);
	strokeWeight(2);
	noFill();

	beginShape();
	for (var x = 0; x <= width; x += 1) {

	  var y = map(sin(angle),-1,1,height/4,height/2);
	  vertex(x,y);
	  angle +=angleVel;
	}
	endShape();
}
