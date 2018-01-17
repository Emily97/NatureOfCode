function setup() {
	createCanvas(640,360);
	background(127);
}

function draw() {
	
	var xloc = randomGaussian();		//Get a Gaussian random number w/mean of standard deviation of 1.0
	var yloc = randomGaussian();

	var xsd = 100;						//Define a standard deviation
	var ysd = 40;

	var xMean = width /2;				//Define a mean value(middle of the screen along the x-axis)
	var yMean = height / 2;
	xloc = (xloc * xsd) + xMean;		//Scale the Gaussian random number by standard deviation and mean
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, yloc, 16, 16);		//Draw an ellipse at our "normal" random position
}