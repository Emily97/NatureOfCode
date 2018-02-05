# One Dimensional Noise

Firstly we declare the walker variable followed by the setup function which contains the canvas dimensions, the background color and a new Walker object is created. 

The step and render functions found within the Walker class are declared in the draw function.  
```js
var walker;

function setup() {
	createCanvas(1200,1000);
	walker = new Walker();
	background(127);
}

function draw() {
	fill(0, 15);
	rect(0, 0, width, height);
	walker.step();
	walker.render();
}
```

## Walker Class

The x position is declared at the centre of the canvas. The xOff variable is declared as a random number between 0 and 1000. 
The render function declares the colour of the ellipse as well as the size of the ellipse. The fill color is red with an opacity of 50%.

The step function contains the x variable which is mapped to the canvas size which contains the noise function which makes the movement across the screen smooth by incrementing xOff with the time, 0.005. 

```js
function Walker() {
	this.x = width /2;
	this.xOff = random(1000);

	this.render = function () {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.x, 500, 40, 40)
	}

	this.step = function () {
		this.x = map(noise(this.xOff), 0, 1, 0, width);
		this.xOff += 0.005;
	}
}