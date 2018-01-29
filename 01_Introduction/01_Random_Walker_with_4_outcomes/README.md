# Random Walker with 4 Outcomes

To start, 2 functions are required to draw the walker objects to the window. 

The two functions required are: 
- setup() => anything found within this function is only executed once when the page is loaded.

```js
function setup() {
	createCanvas(320,640);
	background(127);
	walker = new Walker();
}
```
- draw() => this is loaded every frame to redraw the canvas each frame.

```js
function draw() {
	walker.render();
	walker.step();
}
```







