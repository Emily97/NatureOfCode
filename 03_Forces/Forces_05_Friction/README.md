# Forces05 - Friction
In this tutorial the new force being used is friction. Friction causes objects when they hit a surface to slow down.

## Code
In this example the mover class has not changed.
```js
var Mover = function(m) {

	this.location = createVector(30,30);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.mass = m;

	this.update = function() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	this.display = function() {
		fill(255,0,0,50);
		stroke(150);
		strokeWeight(2);
		ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}

	this.applyForce = function(force) {
		var f = p5.Vector.div(force, this.mass);
		this.acceleration.add(f);
	}

}
```
In the sketch.js we find that the mass is gonna act on the mover. The variable c is the coefficient of friction which establishes the friction force of a particular surface. The variable normal is the force perpendicular to the objects motion across a surface. This means gravity acting on a person from above keeps them on the ground but the ground also pushes up at the person.
Multiplying c and normal variables gives the value for frictionMag.
```js
var mover;

function setup() {
	createCanvas(640, 640);
	mover = new Mover(Math.floor(random(5, 20)));
}

function draw() {
	background(51);

	var m = mover.mass;                                //new

	var wind = createVector(0.05, 0.0);
	var gravity = createVector(0, 0.1 * m);

	var c = 0.5;                                       //new
	var normal = 1;                                    //new
	var frictionMag = c * normal;                      //new
	var friction = p5.Vector.mult(mover.velocity, -1); //new
	friction.normalize();                              //new
	friction.mult(frictionMag);                        //new

	mover.applyForce(friction);                        //new
	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.display();
	mover.update();
	mover.checkEdges();
}
```
