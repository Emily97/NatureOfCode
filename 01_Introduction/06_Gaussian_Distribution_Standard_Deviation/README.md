# Gaussian Distribution - Standard Deviation

The setup function contains just the canvas and background.
```js
function setup() {
	createCanvas(640,360);
	background(127);
}
```
In the draw function, a variable xloc is declared which gives a random Gaussian number with a mean of 0 and standard deviation of 1.0 until they're declared later. 

The variable sd is the standard deviation. The mean is the middle of the canvas. The position of the xloc is determined by the standard deviation of the mean meaning 68% of the ellipses will be found within one standard deviation of the center of the canvas. 

```js
function draw() {
	
	var xloc = randomGaussian();
	var sd = 60;
	var mean = width / 2;
	xloc = (xloc * sd) + mean;

	fill(0, 10);
	noStroke();
	ellipse(xloc, height /2, 16, 16);
}
```