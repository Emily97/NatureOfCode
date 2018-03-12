# Vectors06 - Multiplication and Division
In this exercise we take what we have learned from the previous exercise in terms of how the vectorLine is created. To recap the vectorLine is equal to the subtracting of the mouse and the center variables. In this exercise we use the mult() function which multiplies the vectorLine by what the number value is in the brackets in this case its 0.5 which creates a vectorLine half the size. If we were to change the mult() function to a div() function with 0.5 in the brackets it would create a line twice the length of the vectorLine calculation.

## Code
To start, the setup function is contains canvas which states the size it will be.
```js
function setup() {
	createCanvas(640, 360);
}

```
In the draw function the background color is declared and the three variables declared in the previous exercise are declared again. This time there is a new line of code which depending on the function used will either multiply or divide the value of the vectorLine. The canvas is translated so that the line will be in the center of the canvas. The characteristics of the line are declared.       
```js
function draw() {
	background(51);

	var mouse = createVector(mouseX, mouseY);
	var center = createVector(width/2, height/2);
	var vectorLine = mouse.sub(center);
	vectorLine.mult(0.5);
	//vectorLine.div(0.5);

	translate(width /2, height /2);
	strokeWeight(2);
	stroke(255);
	line(0, 0, vectorLine.x, vectorLine.y);
}
```
