# Vectors05 - Subtraction
In this exercise we have a line which is scaled on to the canvas depending on the mouse position. The line is firstly drawn from the center of the canvas. From (0,0) to the center of the canvas is one line and from (0,0) to where the mouse is are two lines with the third line being the line that connects them together. These two lines are subtracted from each other to create this third line of the triangle which is the line displayed to the canvas.

## Code
The setup function contains the canvas which is given its size.
```js
function setup() {
	createCanvas(640, 360);
}
```
The draw function has the background color specified. Three variables are declared, mouse, center and vectorLine. The variables mouse and center are vectors. Mouse has its two values determined by the mouses mouseX and mouseY coordinates. Center has its two values positioning it in the middle of the canvas. The vectorLine variable gets the other two variables and subtracts them from each other thus determining where the vectorLine would be. The canvas is then translated to the center of the canvas otherwise the center would be at (0,0).
```js
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	var mouse = createVector(mouseX, mouseY);
	var center = createVector(width/2, height/2);
	var vectorLine = mouse.sub(center);

	translate(width /2, height /2);
	strokeWeight(2);
	stroke(255);
	line(0, 0, vectorLine.x, vectorLine.y);
}
```
