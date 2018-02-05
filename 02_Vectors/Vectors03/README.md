# Vectors03 - Using Vectors

Firstly this sketch is the same as the previous sketch in terms of what it does. However in this exercise vectors are used instead to store x and y variables. Using vectors will later help as some sketchs will require vector maths. 

Instead of declaring 4 variables like in the previous sketch, only two variables are declared velocity and position. In the setup function the velocity and position x and y values are declared as vectors.

```js
var position;
var velocity;

function setup() {
	createCanvas(640, 360);
	position = createVector(100, 100);
	velocity = createVector(2, 2);
}
```
In the draw function the background is set so that gets drawn each time the loop is run. Next the variable position has velocity added to them. The if statement stops the ball from leaving the canvas. 

The ball bounces off the edges of the canvas. There are no forces acting on it so it continues like that infinitely.

```js
function draw() {
	background(51);

	//Addthe current speed to the position.
	position.x = position.x + velocity.x;
	position.y = position.y + velocity.y;

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
