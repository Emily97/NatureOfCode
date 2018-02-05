# One Dimensional Noise - Fancy

Firstly two variables walker and noOfWalkers are declared. The setup function sets up the canvas, sets the number of ealkers to 10, sets the walkers to an empty array and then the background color is set. 

A for loop is set so for each loop where if i is less than 10 (noOfWalkers) then a new walker is created. 
```js
var walkers;
var noOfWalkers;

function setup() {
	createCanvas(1200,1000);
	noOfWalkers = 10;
	walkers = [];
	for (i = 0; i < noOfWalkers; i++) {
		walkers[i] = new Walker();
	}
	background(127);
}
```

The draw function creates a rectangle the size of the canvas with an opacity. The for loop is set so each loop where i is less than the number of walkers the step and render functions are called.

```js
function draw() {
	fill(0, 15);
	rect(0, 0, width, height);
	for(i = 0; i < noOfWalkers; i++) {
		walkers[i].step();
		walkers[i].render();
	}
}
```

## Walker Class

The position of the x and y coordinates are stored in a vector variable instead of seperate variables. nOff variable gets two random numbers for x and y between 0 and 1000. 

The render function contains an ellipse which is created using the x and y values. The map and noise functions are used to create the circle. The noise function is used instead of random to an output range thats fixed - it always returns a value between 0 and 1. The map functions takes 5 arguments - first value is the n value, next is the current range(minimum and maximum), followed by the desired range. 

The step function takes the x and y positions and maps them using the noise function and gets a random number from the nOff variable. The nOff variable is then incremented using the add function which decide how fast the circles will move in the x and y direction. In the example below both values are the same so its a smooth movement.
```js
function Walker() {
	this.position = createVector(width/2, height/2);
	this.noff = createVector(random(1000), random(1000));

	this.render = function () {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.x), 0, 1, 20, 200))
	}

	this.step = function() {
		this.position.x = map(noise(this.noff.x), 0, 1, 0 -200, width + 200);
		this.position.y = map(noise(this.noff.y), 0, 1, 0 -200, height +200);
		this.noff.add(0.005,0.005);	
	}
}
