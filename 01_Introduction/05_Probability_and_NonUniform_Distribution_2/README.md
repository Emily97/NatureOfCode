# Probability and Non-Uniform Distribution 2

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
The walker class contains the x and  y positions of the walker object. The render function contains the stroke and starting point of the object. 


```js
function Walker() {
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	};
```

In the step function, we declare a variable called choice which gives 4 random numbers between 0 and 4 and then floors it so its an integer value and not a float. The r variable give a random float number between 0 and 1. Notice this second variable is not floored like the first. 
The if statement uses the float numbers to determine which way the walker will move. In this example the walker has a 40% chance of moving right, 20% chance of then moving up, down and left.  

```js
this.step = function() {
		var choice = floor(random(4));
		var r = random(1);					
		if(r < 0.4) {
			this.x++;
		}
		else if (r < 0.6) {
			this.x--;
		}
		else if (r < 0.8) {
			this.y++;
		}
		else {
			this.y--;
		}

		this.x = constrain(this.x, 0, width-1);
		this.y = constrain(this.y, 0, height-1);
	};
}
```

