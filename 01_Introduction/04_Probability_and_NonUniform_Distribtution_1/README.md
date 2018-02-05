# Probability and Non-Uniform Distribution

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
## Walker Class
The x and y position starting position is declared as the middle of the canvas. The render function contains the stroke of black and places it in the centre of the canvas. 

```js
function Walker() {
	this.x = width / 2;
	this.y = height / 2;

	this.render = function () {
		stroke(0);
		point(this.x, this.y);
	};
```
The step function contains an empty array which is then filled with valuesto determine the probability of an action taking place. 
The variable index is declared and floors random values from the probability array. r is declared to store these new integers. 

```js
	this.step = function(){
		var probArray = [];
		probArray[1] = 1;			
		probArray[2] = 1;
		probArray[3] = 2;
		probArray[4] = 3;
		probArray[5] = 3;

		var index = floor(random(probArray.length));
		var r = probArray[index];

		this.x = constrain(this.x,0,width - 1);
		this.y = constrain(this.y,0,height - 1);

	} 
