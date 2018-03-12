# Forces03 - Mass
In this tutorial we see how mass changes the speed of a moving object. In this example the higher the mass the slower the mover object moves across the screen.

## Code
In this example there are no new changes to the sketch.js file except for declaring the mass of the ball object.
```js
var mover;

function setup() {
	createCanvas(640, 640);
	mover = new Mover(5);    //new
}

function draw() {
	background(51);

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, .05);

	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.display();
	mover.update();
	mover.checkEdges();
}
```
In the mover.js file we see that a new variable mass is declared.
```js
this.mass = m;
```
In the display function we see that depending on the value for mass the mover object could be quite small.
```js
ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
```
