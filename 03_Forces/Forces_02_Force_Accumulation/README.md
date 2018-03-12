# Forces02 - Force Accumulation
In this tutorial we add more forces acting on the mover object. In this case wind and gravity. With gravity now acting on the object the mover starts to fall at a slight curve in comparison to the last tutorial where the ball remained dead straight going across the screen.

## Code
In the sketch.js file we add the new forces to be applied to the mover.
```js
var wind = createVector(0.1, 0,01);
var gravity = createVector(0,.01);

mover.applyForce(wind);
mover.applyForce(gravity);
```
In the mover.js class the file is barely changed except for the applyForce function which uses the add() function instead. This adds the acceleration and force together rather than the force being equal to the acceleration as it was in the previous tutorial.
```js
this.applyForce = function(force) {
  this.acceleration.add(force);
}
```
