# Random Walker with 4 Outcomes
In this exercise the objective is to create a walker who moves randomly on the canvas. The draw function directs the Walker object to take a step. In this example the walker can move one of four ways left, right, up and down by incrementing (++) and decrementing (--). 

## Code
To start, 2 functions are required to draw the walker objects to the window.

The two functions required are:
- setup() => anything found within this function is only executed once when the page is loaded. The setup function initialises the object.

```js
function setup() {
	createCanvas(320,640);
	background(127);
	walker = new Walker();
}
```
- draw() => this is loaded every frame to redraw the canvas each frame. The functions render and step found within the draw function are functions that are declared in the Walker class which makes walker objects.

```js
function draw() {
	walker.render();
	walker.step();
}
```

Within the Walker class the walker objects starting position has been declared at the centre of the canvas. The render function draws a small black dot in the location specified.

```js
function Walker() {
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	}

```
The step function chooses a number between 0 and 4 (3.999 being the max). This is then floored so that there are no decimals places. So then the max number would be 3 and the min would be 0. Depending on which number is chosen will determine which if statement is used which would determine where the walker would go. x++ (0) would make the walker move right, x-- (1) make the walker move to the left, y++ (2) the walker moves forward and finally y-- (3) moves the walker backward. The walker is constrained to the canvas.

```js
this.step = function() {				
		var choice = floor(random(4));		
		if (choice === 0) {					
			this.x++;
		}
		else if (choice === 1) {
			this.x--;
		}
		else if (choice === 2) {
			this.y++;
		}
		else {
			this.y--;
		}
		this.x = constrain(this.x,0,width);
		this.y = constrain(this.y,0,height);
	}
}
```
