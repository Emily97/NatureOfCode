# Vector12 - Vector Motion Accelerating Towards the Mouse
In this tutorial we get the object to move towards the mouse. Depending on where the object is on the screen to the mouse the ball will accelerate towards the mouse even if the mouse is constantly moving.

## Code
No changes to sketch.js file.
```js
var mover;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
}

function draw() {
	background(51);

	mover.update();
	mover.checkEdges();
	mover.display();
}
```
The changes made to the mover class compared to the last exercise are the following:
- the acceleration vector variable is declared blank and velocity is set to 3 for both values
```js
this.velocity = createVector(3, 3);
this.acceleration = createVector();
```
- in the update function a mouse vector variable is declared with its values equal to mouseX and mouseY
```js
var mouse = createVector(mouseX, mouseY);
```
- still in the update function the acceleration variable has been given a P5 Vector value. We are using a static reference to sub() because we want a new PVector pointing from point to another. We then multiply acceleration to show the change in acceleration.
```js
this.acceleration = p5.Vector.sub(mouse, this.location);
this.acceleration.mult(0.2);
```
