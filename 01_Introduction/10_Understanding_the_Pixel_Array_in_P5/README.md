# Understanding the Pixel Array in P5


The setup function establishes the canvas size and the pixel density is set to 1 so that the pixel density would be the same on all devices. 

The draw function loads the pixels onto the canvas in a pixel array. The function updatePixels draws the pixels on the canvas. 
```js
function setup() {
	createCanvas(400, 400);
	pixelDensity(1);
}

function draw() {
	loadPixels();

	var index = (2+2*5)*4;
	pixels[index+0] = 255;
	pixels[index+1] = 0;
	pixels[index+2] = 0;
	pixels[index+3] = 255;

	updatePixels();
}
```
