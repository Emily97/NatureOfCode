# Vectors04 - Addition
 Firstly, we declare position and velocity which in the previous exercise we declared as vectors. Next in the setup function we declared the canvas size as well as give the two values of x and y to the variables position and velocity.
```
var position;
var velocity;

function setup() {
	createCanvas(640, 360);
	position = createVector(100, 100);
	velocity = createVector(2, 2);
}
```
In the draw function we find the background drawn each frame. The add function is new and is important to this exercise. The add function is adding the position and velocity variables together which adds the current speed to the position. The outcome looks like this:
```
position.add(velocity);
```
While this does the same as the previous exercise, it is simpler and shows the capabilities of using vectors rather than individual variables.
Like before the if statements prevent the ball from going off of the screen and bounces. The characteristics of the circle are declared before the ellipse is given its size and where its starting position is.
```
if ((position.x > width) || (position.x < 0)) {
  velocity.x = velocity.x * -1;
}
if ((position.y > height) || (position.y < 0)) {
  velocity.y = velocity.y * -1;
}

//Display circle at x position
stroke(0);
strokeWeight(2);
fill(127);
ellipse(position.x, position.y, 48, 48);
}
```
