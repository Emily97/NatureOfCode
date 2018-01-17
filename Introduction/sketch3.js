var randomCounts = [];					//Firstly we declare and empty array called randomCounts and a variable for the number of items we will have in our array
var total = 20;

function setup() {						//In our setup we create a canvas. The loop populates the array with zero's [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	createCanvas(640,360);
	for (var i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(127);
	var index = floor(random(total));
	randomCounts[index]++;

	//Draw a rectangle to graph results
	stroke(0);
	strokeWeight(2);
	fill(255);

	var w = width/randomCounts.length;

	for (var x = 0; x < randomCounts.length; x++) {
		rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
	}
}