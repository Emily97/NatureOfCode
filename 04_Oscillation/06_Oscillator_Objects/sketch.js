var population = 100;
var oscillators = [];

function setup() {
	createCanvas(640,640);
	background(0);

	for(var i = 0; i < population; i++){
		oscillators[i] = new Oscillator(random(0,1000));
	}
}

function draw(){
	background(255);
	for(var i = 0; i < population; i++){
		oscillators[i].oscillate();
		oscillators[i].render();
	}
}
