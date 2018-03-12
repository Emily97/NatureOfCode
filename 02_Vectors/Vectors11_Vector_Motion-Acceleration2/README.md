# Vector11 - Vector Motion Acceleration: Random
In this tutorial we are giving the mover object a completely random acceleration. Instead of giving the object a constant acceleration which wouldn't be generally associated with say driving a car. When driving acceleration is constantly changing due to forces as well as environmental factors such as stop signs. This shows how random gives an object life like properties.

## Code
The sketch file has not changed.
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
The mover class has only had minimum changes to it this time to give the value of acceleration as a random value. After declaring velocity and location we declare acceleration as a random 2Dimensional value. Whatever the random number is, it is mulitplied by 0.02 so that it keeps moving.
```js
var Mover = function() {

	this.location = createVector(width /2, height /2);
	this.velocity = createVector(0, 0);
	this.acceleration = p5.Vector.random2D();  //new
	this.acceleration.mult(0.02);              //new
}
```
