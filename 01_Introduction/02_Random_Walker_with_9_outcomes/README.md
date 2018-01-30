# Random Walker with 9 outcomes

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

The x and y locations are declared and the render function places the dot where the coordinates state. This is where the walker will start.

```js
function Walker() {
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);			
	}
```
 stepx and stepy determine where the walker will go in the x y direction. In each direction there are 3 options which accumulates to a total of 9 possible moves. The walker can't move outside the canvas because of the constrains.

 ```js
 this.step = function () {
		var stepx = floor(random(-1, 2)); 
		var stepy = floor(random(-1, 2));

		this.x = this.x + stepx;
		this.y = this.y + stepy;

		this.x = constrain(this.x,0,width);
		this.y = constrain(this.y,0,height);
	}
}
```


