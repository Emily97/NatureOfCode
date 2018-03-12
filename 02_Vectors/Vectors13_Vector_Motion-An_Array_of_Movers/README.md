# Vector13 - Vector Motion Multiple Movers
In this tutorial there are now multiple movers on screen all off which follow the mouse. The movers starting location is randomly assigned within the canvas with all of the ball objects going towards the mouse.

## Code
Compared to other exercises the sketch.js file has been changed. In this version the mover variable is an array allowing an array of movers to be made. In the setup a for loop is needed to make all of the new mover objects. In the draw function the another for loop is required to have each mover being updated.
```js
var movers = [];

function setup() {
	createCanvas(640, 360);
  //new
	for (var i = 0; i < 20; i++) {
		movers[i] = new Mover();
	}
}

function draw() {
	background(51);

  //new
	for (var i = 0; i < movers.length; i++) {
		movers[i].update();
		movers[i].display();
	}
}
```
In the mover class there is only one slight change. The location variable has the starting positions being randomly assigned within the canvas to spread out all the movers onto the screen.
```js
var Mover = function() {

	this.location = createVector(floor(random(width)), floor(random(height))); //new
	this.velocity = createVector(3, 3);
	this.acceleration = createVector();

	this.update = function() {
		var mouse = createVector(mouseX, mouseY);

		this.acceleration = p5.Vector.sub(mouse, this.location);
		this.acceleration.setMag(0.2);

		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
	}

	this.display = function() {
		//pick a brush
		stroke(150);
		strokeWeight(2);
		fill(255, 0, 0);

		//And draw an ellipse at the new location vector points
		ellipse(this.location.x, this.location.y, 40, 40);
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}
}

```
