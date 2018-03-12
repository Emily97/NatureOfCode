# Vectors09 - Vector Motion: Velocity
In this tutorial we use the mover class again. The mover class tells what the mover should do like where its starting position will be or what its starting velocity will be. The sketch.js file is where the mover object is made and calls on  the functions found in the mover class to determine its location on the screen or if its near the edge of the screen that the ball should bounce off it. This exercise shows how when no forces act on an object the object will move at that speed for infinite.

## Code: Sketch.js
Firstly in the sketch file declare the mover object. In the setup create the canvas as well as create the mover object.
```js
var mover;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
}
```
In the draw function all the functions in the mover class are declared in terms of the mover object.
```js
function draw() {
	background(51);

	mover.update();
	mover.checkEdges();
	mover.display();
}
```
## Code: Mover.js
In the mover class we declare the vectors for location and velocity and give them their x and y values. In the update function we state that where ever the movers location is on screen add the velocity.
```js
var Mover = function() {

	this.location = createVector(random(width), random(height));
	this.velocity = createVector(10, 5);

	this.update = function() {
		this.location.add(this.velocity);
	}
}
```
In the display function it is decided what the object will look like and where it its starting location will be. Lastly we must have a checkEdges function which makes the ball bounce off the edges of the canvas rather than going off the screen.
```js
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
```
