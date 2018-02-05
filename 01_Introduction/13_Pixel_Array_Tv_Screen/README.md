# Pixel Array - TV Screen

The setup function contains the canvas size and the pixel density function is set to 1.

The draw function load the pixels into the array. The function is always called before the pixels are drawn onto the canvas. 2 loops are required so that all of the x and y values are looped through. The index variable is declared to calculate the pixels. The bright variable is a random number from 0 to 255. The pixels are added to the array, each pixel has its own RGBA value, which will be a color between black and white. The function updatePixels draw the pixels to the canvas. 

```js
function setup() {
	createCanvas(400, 400);
	pixelDensity(1);
}

function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4
			var bright = random(255);
			pixels[index + 0] = bright;
			pixels[index + 1] = bright;
			pixels[index + 2] = bright;
			pixels[index + 3] = 255;	
		}
	}

	updatePixels();
}
```