# Vectors02 - Moving Ball X and Y Directions - No Vectors

Firstly the x, y, xspeed and yspeed  variables are declared. The setup function adds the canvas.

```js
var x = 100;
var y = 100;
 var xspeed = 2.5;
 var yspeed = 2;

 function setup() {
 	createCanvas(640, 360);
 }
```
In the draw function the background is set so that gets drawn each time the loop is run. Next the variables x and y have speed added to them. The if statement stops the ball from leaving the canvas. 

The ball bounces off the edges of the canvas. There are no forces acting on it so it continues like that infinitely.

```js
function draw() {
 	background(51);

 	//Add the current speed to the position
 	x = x + xspeed;
 	y = y + yspeed;

 	if ((x > width) || (x < 0)) {
 		xspeed = xspeed * -1;
 	}
 	if((y > height) || (y < 0)) {
 		yspeed = yspeed * -1;
 	}

 	//Display circle at x position
 	stroke(0);
 	strokeWeight(2);
 	fill(127);
 	ellipse(x, y, 48, 48);

 }
```
