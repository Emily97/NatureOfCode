# Gaussian Distribution - Standard Deviation 2D

The setup function declares the size of the canvas and the background colour.
```js
function setup() {
	createCanvas(640,360);
	background(127);
}
```

In the draw function a x and y location is declared as random gaussian numbers. Next the standard deviations and means for x and y are declared. 

The gaussian random numbers are then scaled by standard deviation and mean. The fill color has an opacity of so that you can see where the gaussian numbers are being placed. 

```js
function draw() {
	
	var xloc = randomGaussian();
	var yloc = randomGaussian();

	var xsd = 100;
	var ysd = 40;

	var xMean = width /2;	
	var yMean = height / 2;
	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, yloc, 16, 16);
}
```