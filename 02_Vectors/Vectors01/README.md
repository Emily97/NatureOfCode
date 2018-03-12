# Vectors01 - Movement in the x Direction

Firstly the x, y and xspeed variables are declared. The setup function adds the canvas.
```js
var x = 320;
var y = 180;
var xspeed = 2;

function setup() {
	createCanvas(640, 360);
}
```
In the draw function the background is set so that gets drawn each time the loop is run. The if statement is needed so that the ball doesnt leave the canvas. The ball bounces off the edges of the canvas and the speed doesnt change due to no forces acting on it. 

```js
function draw() {
	background(51);

	x = x + xspeed;

	if ((x > width) || (x < 0)) {
		xspeed = xspeed * -1;
	}

	stroke(0);
	strokeWeight(2);
	fill(127);
	ellipse(x, 180, 48, 48);
}
```
