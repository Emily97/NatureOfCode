# Implementing 2D Noise in the Pixel Array


We start with declaring the yoff variable. The setup function sets the frame rate to refresh 1 time per second. The noiseDetail adjusts the character and level of detail produced by the Perlin noise function. 
```js
var yoff = 1000.0;

function setup() {
	frameRate(1)
	createCanvas(400, 400);
	pixelDensity(1);
	noiseDetail(10);
}
```
The draw function load the pixels into the array. The function is always called before the pixels are drawn onto the canvas. 2 loops are required so that all of the x and y values are looped through. The index variable is declared to calculate the pixels. The bright variable gets mapped to the canvas and gets a noise value for xoff and yoff. 

The xoff and yoff value is incremented by 0.02 which gives the look of clouds moving. The updatePixels function draw the pixels to the canvas. 

```js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) {
		var xoff = 100.0;
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4
			var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
			pixels[index + 0] = bright;
			pixels[index + 1] = bright;
			pixels[index + 2] = bright;
			pixels[index + 3] = 255;

			xoff += 0.02;
		}

		yoff += 0.02;
	}

	updatePixels();
}
```
