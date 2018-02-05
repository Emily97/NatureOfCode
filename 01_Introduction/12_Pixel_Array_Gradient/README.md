# Pixel Array - Gradient

The setup function contains the canvas size and the pixel density function is set to 1.

The draw function load the pixels into the array. The function is always called before the pixels are drawn onto the canvas. 2 loops are required so that all of the x and y values are looped through. The index variable is declared to calculate the pixels. The [index + n] formula determines what color the array will be as well as well as the opacity.

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
			pixels[index + 0] = x;
			pixels[index + 1] = 0;
			pixels[index + 2] = y;
			pixels[index + 3] = 255;	
		}
	}

	updatePixels();
}
```