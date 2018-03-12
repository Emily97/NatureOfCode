# Forces01 - Applying Forces
Up until this point no forces have been acting on the mover object. But objects have many forces acting upon them. For example when your walking, gravity, friction and wind are all acting on you at the same time. To start off we will just add one force to the ball object.

## Code
In the sketch.js file we declare in the draw function a force in this case wind. The wind vector variables x and y values are given. In the mover class there is a applyForce function which we use in terms of the mover object.
```js
var mover;

function setup() {
	createCanvas(640, 640);
	mover = new Mover();
}

function draw() {
	background(51);

	var wind = createVector(0.1, 0,01);  //new

	mover.applyForce(wind);              //new

	mover.display();
	mover.update();
	mover.checkEdges();
}
```
In the mover class the newest function added to the class is the applyForce function. The wind force is acting on the acceleration causing the mover object to slow down as it goes across the screen.
```js
this.applyForce = function(force) {
  this.acceleration = force;
}
```
