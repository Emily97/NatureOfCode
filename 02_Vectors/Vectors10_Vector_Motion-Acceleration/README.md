# Vector10 - Vector Motion Acceleration
In this tutorial we see what the effects of acceleration are on the mover object. Acceleration is the rate of change of velocity. Acceleration affects the velocity which in turn affects the location. In this example we have our inital velocity set at zero to show how acceleration affects the velocity.

## Code
In terms of the sketch.js nothing has changed since the previous exercise.
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
In the mover class the main areas that have changed since the last exercise are the following:
- the velocity x and y values are set to zero
- we add a new vector variable called acceleration which we give a decimal value for x and y
- in the update function we find two new lines of code one which sets the max limit of the velocity to 10 meaning its speed can never exceed 10. Also a new addition equation is used to add the velocity to the acceleration variable.
```js
this.acceleration = createVector(0.03, 0.04); //new

this.update = function() {
  this.velocity.add(this.acceleration);       //new
  this.velocity.limit(10);                    //new
  this.location.add(this.velocity);
}
```
