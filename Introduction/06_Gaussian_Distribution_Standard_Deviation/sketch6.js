function setup() {
	createCanvas(640,360);
	background(127);
}

function draw() {
	
	var xloc = randomGaussian();		//Get a gaussian random number w/mean of 0 and standard deviation of 1.0
	console.log(xloc);

	var sd = 60;						//Define a standard deviation
	var mean = width / 2;				//Define a mean value(middle of screen along the x-axis)
	xloc = (xloc * sd) + mean;			//Scale the gaussian random number by standard deviation and mean

	fill(0, 10);
	noStroke();
	ellipse(xloc, height /2, 16, 16);	//Draw an ellipse at our "normal" random position
}