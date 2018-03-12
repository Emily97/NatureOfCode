# Forces04 - Gravity
In this tutorial we have many mover objects being made all being effected by gravity. The mass of each of the objects is random to show how fast small objects compared to big objects fall.

## Code
In the sketch.js file we find that the mover objects are in a for loop to create multiple objects with a random mass number between 5 and 20. Another for loop in the draw function allows all of the movers to get updated on each draw.
```js
var mover = [];

function setup() {
	createCanvas(640, 640);

  //new
	for (var i = 0; i < 20; i++) {
		mover[i] = new Mover(Math.floor(random(5, 20)));
	}
}

function draw() {
	background(51);

  //new
	for (var i = 0; i < 20; i++) {
		var m = mover[i].mass;

		var wind = createVector(0.1, 0.0);
		var gravity = createVector(0, 0.1 * m);

		mover[i].applyForce(wind);
		mover[i].applyForce(gravity);

		mover[i].display();
		mover[i].update();
		mover[i].checkEdges();
	}
}
```
In the mover.js the applyForce function has been changed to include mass which  is divided by the force with that being added to acceleration.
```js
this.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
}
```
